import ShopSctionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
    type: ShopSctionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionMap => ({
    type: ShopSctionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopSctionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});