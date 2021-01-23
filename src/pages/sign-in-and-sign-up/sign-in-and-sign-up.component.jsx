import React from 'react';
import styled from 'styled-components';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => {

    return (
        <S_signInAndSignUp className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </S_signInAndSignUp>
    )
};

export default SignInAndSignUpPage;

const S_signInAndSignUp = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;