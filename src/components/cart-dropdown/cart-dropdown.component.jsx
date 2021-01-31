import React from 'react';
import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { useDispatch, useSelector } from 'react-redux';


const CartDropdown = () => {

  const { cartItems } = useSelector(state => state.cart);

  return (
    <S_cartDropdown className='cart-dropdown'>
      <S_cartItem className='cart-items' >
        {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
      </S_cartItem>
      <S_CustomButton>GO TO CHECKOUT</S_CustomButton>
    </S_cartDropdown>
  )
};

export default CartDropdown;

const S_cartDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 0;
  z-index: 5;
`;

const S_cartItem = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const S_CustomButton = styled(CustomButton)`
  margin-top: auto;
`;