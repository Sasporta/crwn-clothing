import React from 'react';
import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { useDispatch } from 'react-redux';


const CartDropdown = ({ history }) => {

  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  return (
    <S_cartDropdown className='cart-dropdown'>
      <S_cartItem className='cart-items' >
        {cartItems.length
          ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          : <S_emptyMessage className='empty-message'>Your cart is empty</S_emptyMessage>
        }
      </S_cartItem>
      <S_CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</S_CustomButton>
    </S_cartDropdown>
  )
};

export default withRouter(CartDropdown);

const S_cartDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

const S_cartItem = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const S_emptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const S_CustomButton = styled(CustomButton)`
  margin-top: auto;
`;