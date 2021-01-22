import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/crown.svg'
const Header = () => {

    return (
        <S_header className='header'>
            <S_logoContainer className='logo-container' to='/'>
            <Logo className='logo' />
            </S_logoContainer>
            <S_options className='options'>
                <S_option className='option' to='/shop'>SHOP</S_option>
                <S_option className='option' to='/shop'>CONTACT</S_option>
            </S_options>
        </S_header>
    )
};

export default Header;

const S_header = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const S_logoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

const S_options = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const S_option = styled(Link)`
  padding: 10px 15px;
`;
