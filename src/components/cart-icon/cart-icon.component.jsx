import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import styled from "styled-components";
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';

const CartIcon = () => {

  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const itemCount = cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0);

    return (
        <S_cartIcon className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
            <S_shoppingIcon className='shopping-icon' />
            <S_itemCount className='item-count'>{itemCount}</S_itemCount>
        </S_cartIcon>
    )
};

export default CartIcon;

const S_cartIcon = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const S_shoppingIcon = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;

const S_itemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
