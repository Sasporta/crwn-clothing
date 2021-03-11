import React, { useState } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';


const SignUp = () => {

    const [userCredentials, setUserCredentials] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });
    const { displayName, email, password, confirmPassword } = userCredentials;
    // const [displayName, set_displayName] = useState('');
    // const [email, set_email] = useState('');
    // const [password, set_password] = useState('');
    // const [confirmPassword, set_confirmPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

            dispatch(signUpStart({ email, password, displayName }));
            setUserCredentials({ displayName: '', email: '', password: '', confirmPassword: '' });
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <SignUpContainer>
            <SignUpTitleContainer>I do not have a account</SignUpTitleContainer>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
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
        </SignUpContainer>
    )
};

export default SignUp;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    width: unset;
  }
`;

const SignUpTitleContainer = styled.h2`;
  margin: 10px 0;
`;