import React from 'react';
import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { useDispatch } from 'react-redux';


const CartDropdown = ({ history }) => {

  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  return (
    <CartDropdownContainer className='cart-dropdown'>
      <CartItemContainer className='cart-items' >
        {cartItems.length
          ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          : <EmptyMessageContainer className='empty-message'>Your cart is empty</EmptyMessageContainer>
        }
      </CartItemContainer>
      <CustomButtonContainer onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButtonContainer>
    </CartDropdownContainer>
  )
};

export default withRouter(CartDropdown);

const CartDropdownContainer = styled.div`
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
  z-index: 1;
`;

const CartItemContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const CustomButtonContainer = styled(CustomButton)`
  margin-top: auto;
`;