import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import styled from "styled-components";
import { useSelector } from 'react-redux';

const Directory = () => {

    const { sections } = useSelector(state => state.directory);

    return (
        <DirectoryMenuContainer>
            {sections.map(({id, ...otherSectionProps }) => 
            <MenuItem key={id} {...otherSectionProps} />)}
        </DirectoryMenuContainer>
    )
};

export default Directory;

const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;