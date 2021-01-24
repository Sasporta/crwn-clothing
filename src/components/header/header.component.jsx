import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import styled from 'styled-components';
import { useSelector } from "react-redux";

const Header = () => {

  const { currentUser } = useSelector(state => state.user)

  return (
    <S_header className='header'>
      <S_logoContainerLink className='logo-container' to='/'>
        <Logo className='logo' />
      </S_logoContainerLink>
      <S_options className='options'>
        <S_optionLink className='option' to='/shop'>SHOP</S_optionLink>
        <S_optionLink className='option' to='/shop'>CONTACT</S_optionLink>
        {currentUser ?
          <S_option className='option' onClick={() => auth.signOut()}>SIGN OUT</S_option> :
          <S_optionLink className='option' to='/signin'>SIGN IN</S_optionLink>
        }
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

const S_logoContainerLink = styled(Link)`
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

const S_optionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

const S_option = styled.div`
  padding: 10px 15px;
  cursor: pointer;
`;
