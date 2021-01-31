import React from 'react';
import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

const CollectionItem = ({ item }) => {

  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;

  return (
    <S_collectionItem className='collection-item'>
      <S_image className='image' imageUrl={imageUrl} />
      <S_collectionFooter className='collction-footer'>
        <S_name className='name'>{name}</S_name>
        <S_price className='price'>{price}</S_price>
      </S_collectionFooter>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>Add to cart</CustomButton>
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
  position: relative;

    .custom-button{
      width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 255px;
      display:none;
    }

    &:hover{
      .image{
        opacity:0.8
      }

      .custom-button{
        opacity: 0.85;
        display: flex;
      }
    }
`;

const S_image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: url(${({ imageUrl }) => imageUrl});
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