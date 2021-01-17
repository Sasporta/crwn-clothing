import React from 'react';
import styled from "styled-components";

const HomePage = () => {

    return (
        <S_homepage cassName='homepage'>
            <S_directoryMenu cassName='directory-menu'>
                {['HATS', 'JACKETS', 'SNEAKERS', 'WOMENS', 'MENS'].map(v =>
                    <S_menuItem cassName='menu-item'>
                        <S_content cassName='content'>
                            <S_title cassName='title'>{v}</S_title>
                            <S_subtitle cassName='subtitle'>SHOP NOW</S_subtitle>
                        </S_content>
                    </S_menuItem>
                )}
            </S_directoryMenu>
        </S_homepage>
    )
};

export default HomePage;

const S_homepage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 80px;
`;

const S_directoryMenu = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

const S_menuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  height: 240px;
  min-width: 30%;
  border: 1px solid black;
  margin: 0 7.5px 15px;

    &:first-child{
        margin-right: 7.5px;
    }

    &:last-child{
        margin-left: 7.5px;
    }
`;

const S_content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 90px;
  padding: 0 25px;
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
