import React from 'react';
import styled from 'styled-components';
import { removeItem, addItem, clearItem } from '../../redux/cart/cart.action';
import { useDispatch } from 'react-redux';

const CheckoutItem = ({ cartItem }) => {

  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;

    return (
        <S_checkoutItem className='checkout-item'>
            <S_imageContainer className='image-container'>
                <S_img src={imageUrl} alt='item' />
            </S_imageContainer>
            <S_details className='name'>{name}</S_details>
            <S_quantityDetails className='quantity'>
              <S_arrow className='arrow' onClick={() => dispatch(removeItem(cartItem))}>&#10094;</S_arrow>
              <S_value className='value'>{quantity}</S_value>
              <S_arrow className='arrow' onClick={() => dispatch(addItem(cartItem))}>&#10095;</S_arrow>   
              </S_quantityDetails>
            <S_details className='price'>{price}</S_details>
            <S_removeButton className='remove' onClick={() => dispatch(clearItem(cartItem))}>&#10005;</S_removeButton>
        </S_checkoutItem>
    );
};

export default CheckoutItem;

const S_checkoutItem = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center
`;

const S_imageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

const S_img = styled.img`
  width: 100%;
  height: 100%;
`;

const S_details = styled.span`
  width: 23%;
`;

const S_quantityDetails = styled(S_details)`
  display: flex;
`;

const S_arrow = styled.div`
  cursor: pointer;
`;

const S_value = styled.span`
  margin: 0 10px;
`;

const S_removeButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

