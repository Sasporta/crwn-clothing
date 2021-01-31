import React from 'react';
import styled from 'styled-components';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {

    return (
        <S_collectionPreview className='collection-preview'>
            <S_title className='title'>{title.toUpperCase()}</S_title>
            <S_preview className='preview'>
                {items.filter((v, i) => i < 4).map(item => <CollectionItem key={item.id} item={item} />)}
            </S_preview>
        </S_collectionPreview>
    )
};

export default CollectionPreview;

const S_collectionPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const S_title = styled.h1`
  font-size: 28px
  margin-bottom: 25px;
`;

const S_preview = styled.div`
  display: flex;
  justify-content: space-between;
`;
