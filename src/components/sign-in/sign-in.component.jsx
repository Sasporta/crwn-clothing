import React, { useState } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import styled from "styled-components";

const SignIn = () => {

    const [email, set_email] = useState('');
    const [password, set_password] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        set_email('');
        set_password('');
    }

    const handleChange = e => {
        const { value, name } = e.target;
        name === 'email' ? set_email(value) : set_password(value);
    }

    return (
        <S_signIN className='sign-in'>
            <h2>I already have an account</h2>
            <S_title className='title'>Sign in with your email and password</S_title>
            <form onSubmit={handleSubmit}>
                <FormInput 
                name='email' 
                type='email' 
                value={email} 
                handleChange={handleChange}
                label='email'
                required/>
                <FormInput 
                name='password' 
                type='password' 
                value={password} 
                handleChange={handleChange}
                label='password'
                required/>
                <S_buttons className='buttons'>
                <CustomButton type="submit">Sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                </S_buttons>
            </form>
        </S_signIN>
    )
};

export default SignIn;

const S_signIN = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

const S_title = styled.span`;
  margin: 10px 0;
  `;

  const S_buttons = styled.div`;
  display: flex;
  justify-content: space-between;
`;



