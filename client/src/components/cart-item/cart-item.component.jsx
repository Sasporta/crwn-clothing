import React from 'react';
import styled from 'styled-components';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {

    return (
        <CartItemContainer>
            <CartItemImageContainer src={imageUrl} alt='item' />
            <ItemDetailsContainer>
                <span>{name}</span>
                <span>{quantity} x ${price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
};

export default React.memo(CartItem);

const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

const CartItemImageContainer = styled.img`
  width: 30%;
`;

const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;
