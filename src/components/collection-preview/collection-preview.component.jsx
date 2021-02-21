import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPreview = ({ title, items, history, match, routeName }) => {

    return (
        <CollectionPreviewContainer className='collection-preview'>
            <TitleContainer className='title' onClick={() => history.push(`${match.path}/${routeName}`)}>{title}</TitleContainer>
            <PreviewContainer className='preview'>
                {items.filter((v, i) => i < 4).map(item => <CollectionItem key={item.id} item={item} />)}
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
};

export default withRouter(CollectionPreview);

const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  width: min-content;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
