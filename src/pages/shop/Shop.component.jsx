import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'; 
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-Spinner/with-Spinner.component';
import { firestore, convertCollectionsSnapShotToMap } from '../../firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {

    const [loading, set_loading] = useState(true);

    const dispatch = useDispatch();
    const [renderController] = useState(null);

    useEffect(()=> {
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapShotToMap(snapshot);
            dispatch(updateCollections(collectionMap));
            set_loading(false);
        });
    }, [renderController]);

    return (
        <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />   
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />   
        </div>
    );
};

export default ShopPage;