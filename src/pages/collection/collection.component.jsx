import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CollectionPage = ({ match }) => {

    const { collections } = useSelector(state => state.shop);
    const selectCollections = collections[match.params.collectionId]
    const { title, items } = selectCollections;

    return (
        <S_collectionPage className='collection-page'>
            <S_title className='title'>{title}</S_title>
            <S_items className='items'>
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </S_items>
        </S_collectionPage>
    );
};

export default CollectionPage;

const S_collectionPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const S_title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

const S_items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & .collection-item {
    margin-bottom: 30px;
  }
`;
