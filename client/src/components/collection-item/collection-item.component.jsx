import React from 'react';
import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item }) => {

  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer className='collection-item'>
      <BackgroundImageContainer className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer className='collction-footer'>
        <NameContainer className='name'>{name}</NameContainer>
        <PriceContainer className='price'>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => dispatch(addItem(item))} inverted>Add to cart</AddButton>
    </CollectionItemContainer>
  )
};

export default CollectionItem;

const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

    &:hover {
      .image {
        opacity: 0.8;
      }

      button {
        opacity: 0.85;
        display: flex;
      }
    }

    @media screen and (max-width: 800px) {
      width: 40vw;
      
      &:hover {
        .image {
          opacity: unset;
        }
  
        button {
          opacity: unset;
        }
      }
    }
`;

const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: url(${({ imageUrl }) => imageUrl});
`;

const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;