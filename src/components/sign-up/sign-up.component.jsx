import React, { useState } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import styled from 'styled-components';


const SignUp = () => {

    const [displayName, set_displayName] = useState('');
    const [email, set_email] = useState('');
    const [password, set_password] = useState('');
    const [confirmPassword, set_confirmPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            set_displayName('');
            set_email('');
            set_password('');
            set_confirmPassword('');

        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = e => {
        const { value, name } = e.target;
        if (name === 'displayName') { set_displayName(value) }
        else if (name === 'email') { set_email(value) }
        else if (name === 'password') { set_password(value) }
        else if (name === 'confirmPassword') { set_confirmPassword(value) }

    }

    return (
        <S_signUp className='sign-up'>
            <S_title className='title'>I do not have a account</S_title>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </S_signUp>
    )
};

export default SignUp;

const S_signUp = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

const S_title = styled.h2`;
  margin: 10px 0;
`;