import React from 'react';
import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = () => {

    return (
        <S_cartDropdown className='cart-dropdown'>
            <S_cartItem className='cart-items' />
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
  overflow: scroll;
`;

const S_CustomButton = styled(CustomButton)`
  margin-top: auto;
`;