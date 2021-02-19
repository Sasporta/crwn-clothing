import React from 'react';
import styled from "styled-components";
import Directory from '../../components/directory/directory.component'

const HomePage = () => {

  return (
    <S_homepage className='homepage'>
      <Directory />
    </S_homepage>
  )
};

export default HomePage;

const S_homepage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 80px;
`;



