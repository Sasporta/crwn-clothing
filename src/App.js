import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { useSelector } from "react-redux";
import CheckoutPage from './pages/checkout/checkout.component';


const App = () => {

  const { currentUser } = useSelector(state => state.user);
  const [renderController] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          dispatch(setCurrentUser({ id: snapShot.id, ...snapShot.data() }));
        })
      }
      else {
        dispatch(setCurrentUser(userAuth));
      }
    });
    return () => unsubscribeFromAuth();
  }, [renderController]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />} />
      </Switch>
    </>
  );
};

export default App;
