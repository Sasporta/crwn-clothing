import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


const CheckoutPage = () => {

    const { cartItems } = useSelector(state => state.cart);

    const total = cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0);

    return (
        <S_checkoutPage className='checkout-page'>
            <S_checkoutHeader className='checkout-header'>
                <S_headerBlock className='header-block'>
                    <span>Product</span>
                </S_headerBlock>
                <S_headerBlock className='header-block'>
                    <span>Description</span>
                </S_headerBlock>
                <S_headerBlock className='header-block'>
                    <span>Quantity</span>
                </S_headerBlock>
                <S_headerBlock className='header-block'>
                    <span>Price</span>
                </S_headerBlock>
                <S_headerBlock className='header-block'>
                    <span>Remove</span>
                </S_headerBlock>
            </S_checkoutHeader>
            { cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
            <S_total className='total'>
                <span>TOTAL: ${total}</span>
            </S_total>
        </S_checkoutPage>
    )
};

export default CheckoutPage;

const S_checkoutPage = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

const S_checkoutHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const S_headerBlock = styled.div`
  width: 23%;
  text-transform: capitalize;

    &:last-child {
        width: 8%;
    }
`;

const S_total = styled.div`
  margin-top:30px;
  margin-left: auto;
  font-size: 36px;
`;
