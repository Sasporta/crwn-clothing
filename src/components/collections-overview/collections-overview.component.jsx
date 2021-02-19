import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CollectionsOverview = () => {

    const { collections } = useSelector(state => state.shop);
    const selectCollectionsForPreview = Object.keys(collections).map(key => collections[key]);

    return (
        <S_collectionsOverview className='collections-overview'>
            {selectCollectionsForPreview.map(({ id, ...otherCollectionProps }) =>
                <CollectionPreview key={id} {...otherCollectionProps} />
            )}
        </S_collectionsOverview>
    );
};

export default CollectionsOverview;

const S_collectionsOverview = styled.div`
  display: flex;
  flex-direction: column;
`;