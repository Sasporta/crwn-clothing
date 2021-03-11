import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = () => {

    const { cartItems } = useSelector(state => state.cart);

    const total = cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0);

    return (
        <CheckoutPageContainer className='checkout-page'>
            <CheckoutHeaderContainer className='checkout-header'>
                <HeaderBlockContainer className='header-block'>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer className='header-block'>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer className='header-block'>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer className='header-block'>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer className='header-block'>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            { cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
            <Totalcontainer className='total'>
                <span>TOTAL: ${total}</span>
            </Totalcontainer>
            <TestWarningContainer className='test-warning'>
                *Please use the following test credit card for payment*
                <br/>
                4242 4242 4242 4242 - Exp: 01/22 CVV: 123
            </TestWarningContainer>
            <StripeCheckoutButton price={total} />
        </CheckoutPageContainer>
    )
};

export default CheckoutPage;

const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
      margin-left: auto;
      margin-top: 50px;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

    &:last-child {
        width: 8%;
    }

    @media screen and (max-width: 800px) {
      width: 22%;

      &:last-child {
      width: 12%;
      }
    }
`;

const Totalcontainer = styled.div`
  margin-top:30px;
  margin-left: auto;
  font-size: 36px;
`;



const TestWarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;


