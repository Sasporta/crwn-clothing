import React from 'react';
import styled from "styled-components";

const MenuItem = ({ title, imageUrl, size }) => {

    return (
        <S_menuItem className={`${size} menu-item`}>
            <BackgroundImage className='background-image' imageUrl={imageUrl}/>
            <S_content className='content'>
                <S_title className='title'>{title}</S_title>
                <S_subtitle className='subtitle'>SHOP NOW</S_subtitle>
            </S_content>
        </S_menuItem>
    )
};

export default MenuItem;

const S_menuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  height: 240px;
  min-width: 30%;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &.large{
    height: 360px;
  }

  &:first-child{
    margin-right: 7.5px;
  }

  &:last-child{
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    & .background-image {
        border: red;
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)
    }

    & .content {
        opacity: 0.9;
    }
  }
`;

const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({imageUrl}) => imageUrl});
`;


const S_content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 90px;
  background-color: white;
  opacity: 0.7;
  padding: 0 25px;
  position: absolute;
`;

const S_title = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #4a4a4a;
  margin-bottom: 6px;
`;

const S_subtitle = styled.div`
  font-size:16px
  font-weight: lighter;
`;
