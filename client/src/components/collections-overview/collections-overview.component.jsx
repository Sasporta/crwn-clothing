import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CollectionsOverview = () => {

    const { collections } = useSelector(state => state.shop);
    const selectCollectionsForPreview = () =>  
    collections ? Object.keys(collections).map(key => collections[key]) : [];

    return (
        <CollectionsOverviewContainer>
            {selectCollectionsForPreview().map(({ id, ...otherCollectionProps }) =>
                <CollectionPreview key={id} {...otherCollectionProps} />
            )}
        </CollectionsOverviewContainer>
    );
};

export default CollectionsOverview;

const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;