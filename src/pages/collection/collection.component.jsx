import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CollectionPage = ({ match }) => {

    const { collections } = useSelector(state => state.shop);

    let titleValue = '';
    let itemsValue = [];
    
    if(collections) {
      const { title, items } = collections[match.params.collectionId];
      titleValue = title;
      itemsValue = items;
    };

    return collections ? ( 
        <CollectionPageContainer className='collection-page'>
            <CollectionTitleContainer className='title'>{titleValue}</CollectionTitleContainer>
            <CollectionItemsContainer className='items'>
                {itemsValue.map(item => <CollectionItem key={item.id} item={item} />)}
            </CollectionItemsContainer>
        </CollectionPageContainer> 
    ) : null;
};

export default CollectionPage;

const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionTitleContainer = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & .collection-item {
    margin-bottom: 30px;
  }
`;
