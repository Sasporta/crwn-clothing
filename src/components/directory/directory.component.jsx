import React, { useState } from 'react';
import MenuItem from "../menu-item/menu-item.component";
import DIRECTORY_DATA from './directory.data'
import styled from "styled-components";

const Directory = () => {

    const [section, set_section] = useState(DIRECTORY_DATA);

    return (
        <S_directoryMenu className='directory-menu'>
            {section.map(({id, ...otherSectionProps }) => 
            <MenuItem key={id} {...otherSectionProps} />)}
        </S_directoryMenu>
    )
};

export default Directory;

const S_directoryMenu = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;