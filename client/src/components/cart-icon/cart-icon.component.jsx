import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import styled from "styled-components";
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { useDispatch, useSelector } from 'react-redux';

const CartIcon = () => {

  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const itemCount = cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0);

    return (
        <CartIconContainer className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIconContainer className='shopping-icon' />
            <ItemCountContainer className='item-count'>{itemCount}</ItemCountContainer>
        </CartIconContainer>
    )
};

export default CartIcon;

const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ShoppingIconContainer = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;

const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
