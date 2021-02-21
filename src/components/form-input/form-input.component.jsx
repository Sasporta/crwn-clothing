import React from 'react';
import styled, { css } from "styled-components";

const FormInput = ({ handleChange,label, ...otherProps }) => {

    return (
        <DirectoryMenuContainer className='group'>
            <FormInputContainer className='from-input' onChange={handleChange} {...otherProps} />
            {
                label ?
                <FormInputLabelContainer className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >
                    {label}
                </FormInputLabelContainer> : null
            }
        </DirectoryMenuContainer>
    )
};

export default FormInput;

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

const DirectoryMenuContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  ${({type}) => type === 'password' ? 'letter-spacing: 0.3em;' : ''}

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

const FormInputLabelContainer = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;