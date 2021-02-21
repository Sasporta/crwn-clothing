import React, { useState } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import styled from "styled-components";

const SignIn = () => {

    const [email, set_email] = useState('');
    const [password, set_password] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            set_email('');
            set_password('');
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = e => {
        const { value, name } = e.target;
        name === 'email' ? set_email(value) : set_password(value);
    }

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
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
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