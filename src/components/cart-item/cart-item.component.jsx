import React from 'react';
import styled from 'styled-components';

const CartItem = ({ item: { imageUrl,name, price, quantity } }) => {

    return (
        <S_cartItem className='cart-item'>
            <S_img src={imageUrl} alt='item' />
            <S_itemDetails className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'> {quantity} x ${price}</span>
            </S_itemDetails>
        </S_cartItem>
    )
};

export default CartItem;

const S_cartItem = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

const S_img = styled.img`
  width: 30%;
`;

const S_itemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

    .name {
      font-size: 16px;    
    }  
`;
