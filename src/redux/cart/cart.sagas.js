import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure } from '../user/user.actions';

export function* clearCartOnSignOut() {
    yield put(clearCart());
};

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
};

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ]);
};