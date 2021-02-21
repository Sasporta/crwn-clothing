import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const Header = () => {

  const { currentUser } = useSelector(state => state.user);
  const { hidden } = useSelector(state => state.cart);

  return (
    <HeaderContainer className='header'>
      <LogoContainer className='logo-container' to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer className='options'>
        <OptionLink className='option' to='/shop'>SHOP</OptionLink>
        <OptionLink className='option' to='/shop'>CONTACT</OptionLink> 
        {currentUser ?
          <OptionLink as='div' className='option' onClick={() => auth.signOut()}>SIGN OUT</OptionLink> :
          <OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
};

export default Header;

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
