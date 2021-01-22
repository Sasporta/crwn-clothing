import React from 'react';
import styled from 'styled-components';

const CollectionItem = ({ name, price, imageUrl}) => {

    return (
        <S_collectionItem className='collection-item'>
            <S_image className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <S_collectionFooter className='collction-footer'>
                <S_name className='name'>{ name }</S_name>
                <S_price className='price'>{ price }</S_price>
            </S_collectionFooter>
        </S_collectionItem>
    )
}

export default CollectionItem;

const S_collectionItem = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`;

const S_image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

const S_collectionFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 5%;
  font-size: 18px;
`;

const S_name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

const S_price = styled.span`
  width: 10%;
`;
