import React from 'react';
import styled from 'styled-components';
import { removeItem, addItem, clearItem } from '../../redux/cart/cart.action';
import { useDispatch } from 'react-redux';

const CheckoutItem = ({ cartItem }) => {

  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;

    return (
        <CheckoutItemContainer className='checkout-item'>
            <ImageContainer className='image-container'>
                <Img src={imageUrl} alt='item' />
            </ImageContainer>
            <TextContainer className='name'>{name}</TextContainer>
            <QuantityContainer className='quantity'>
              <Arrow className='arrow' onClick={() => dispatch(removeItem(cartItem))}>&#10094;</Arrow>
              <ValueContainer className='value'>{quantity}</ValueContainer>
              <Arrow className='arrow' onClick={() => dispatch(addItem(cartItem))}>&#10095;</Arrow>   
              </QuantityContainer>
            <TextContainer className='price'>{price}</TextContainer>
            <RemoveButtonContainer className='remove' onClick={() => dispatch(clearItem(cartItem))}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;

const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.span`
  width: 23%;
`;

const QuantityContainer = styled(TextContainer)`
  display: flex;
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const ValueContainer = styled.span`
  margin: 0 10px;
`;

const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

