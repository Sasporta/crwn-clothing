import React from 'react';
import styled from "styled-components";
import Directory from '../../components/directory/directory.component'

const HomePage = () => {

  return (
    <HomePageContainer className='homepage'>
      <Directory />
    </HomePageContainer>
  )
};

export default HomePage;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;



