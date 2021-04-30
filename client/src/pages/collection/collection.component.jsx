import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CollectionPage = ({ match }) => {

    const { collections } = useSelector(state => state.shop);
    const { title, items } = collections[match.params.collectionId] || { title: '', items: [] };

    return ( 
      <CollectionPageContainer>
        <CollectionTitleContainer className='title'>{title}</CollectionTitleContainer>
        <CollectionItemsContainer className='items'>
          {items.map(item => <CollectionItem key={item.id} item={item} />)}
        </CollectionItemsContainer>
      </CollectionPageContainer> 
    );
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
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & .collection-item {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;


