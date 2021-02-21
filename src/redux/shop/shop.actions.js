import ShopSctionTypes from './shop.types';

export const updateCollections = collectionMap => ({
    type: ShopSctionTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
});