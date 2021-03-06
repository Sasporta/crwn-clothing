import React from 'react';
import styled from 'styled-components';
import { removeItem, addItem, clearItem } from '../../redux/cart/cart.actions';
import { useDispatch } from 'react-redux';

const CheckoutItem = ({ cartItem }) => {

  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Img src={imageUrl} alt='item' />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
              <Arrow onClick={() => dispatch(removeItem(cartItem))}>&#10094;</Arrow>
              <ValueContainer>{quantity}</ValueContainer>
              <Arrow onClick={() => dispatch(addItem(cartItem))}>&#10095;</Arrow>   
              </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => dispatch(clearItem(cartItem))}>&#10005;</RemoveButtonContainer>
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
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
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

  @media screen and (max-width: 800px) {
    width: 22%;
  }
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

