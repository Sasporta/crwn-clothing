import React from 'react';
import styled from 'styled-components';

const ContactPage = () => {

    return (
        <ContactPageContainer>
            <h1>I hope you liked this project!</h1>
            <h2>
                for more projects please visit:
                <br />
                <LinkContainer href="https://github.com/Sasporta">https://github.com/Sasporta</LinkContainer>
            </h2>
        </ContactPageContainer>
    )
};

export default ContactPage;

const ContactPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
`;
const LinkContainer = styled.a`
color: #0645AD;  
`;
