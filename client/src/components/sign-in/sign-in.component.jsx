import React, { useState } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { useDispatch } from 'react-redux';
import styled from "styled-components";

const SignIn = () => {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;
    const dispatch = useDispatch();
    
    const handleSubmit = async e => {
        e.preventDefault();
        dispatch(emailSignInStart({ email, password }));
        setUserCredentials({ email: '', password: '' });
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setUserCredentials({ ...userCredentials, [name]: value })
    };

    return (
        <SignInContainer className='sign-in'>
            <SignInTitleContainer>I already have an account</SignInTitleContainer>
            <span className='title'>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    handleChange={handleChange}
                    label='email'
                    required />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required />
                <SignInButtonsContainer className='buttons'>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type="button" onClick={() => dispatch(googleSignInStart())} isGoogleSignIn>Sign in with Google</CustomButton>
                </SignInButtonsContainer>
            </form>
        </SignInContainer>
    )
};

export default SignIn;

const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

const SignInTitleContainer = styled.h2`;
  margin: 10px 0;
`;

const SignInButtonsContainer = styled.div`;
  display: flex;
  justify-content: space-between;
`;