import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import styled from "styled-components";
import { useSelector } from 'react-redux';

const Directory = () => {

    const { sections } = useSelector(state => state.directory);

    return (
        <S_directoryMenu className='directory-menu'>
            {sections.map(({id, ...otherSectionProps }) => 
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