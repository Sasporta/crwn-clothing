import React from 'react';
import styled from 'styled-components';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {

    return (
        <S_checkoutItem className='checkout-item'>
            <S_imageContainer className='image-container'>
                <S_img src={imageUrl} alt='item' />
            </S_imageContainer>
            <S_details className='name'>{name}</S_details>
            <S_quantityDetails className='quantity'>{quantity}</S_quantityDetails>
            <S_details className='price'>{price}</S_details>
            <S_removeButton className='remove'>&#10005;</S_removeButton>
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
  padding-left: 20px;
`;

const S_removeButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

