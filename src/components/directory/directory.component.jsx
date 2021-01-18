import React, { useState } from 'react';
import styled from "styled-components";
import MenuItem from "../menu-item/menu-item.component";

const Directory = () => {

    const [section, set_section] = useState(
        [
            {
                title: 'HATS',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
            },
            {
                title: 'JACKETS',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2
            },
            {
                title: 'SNEAKERS',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3
            },
            {
                title: 'WOMENS',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4
            },
            {
                title: 'MENS',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5
            }
        ]
    );

    return (
        <S_directoryMenu className='directory-menu'>
            {section.map(({title, imageUrl, size, id}) => 
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />)}
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