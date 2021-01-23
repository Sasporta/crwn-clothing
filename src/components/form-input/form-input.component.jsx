import React from 'react';
import styled from "styled-components";

const FormInput = ({ handleChange,label, ...otherProps }) => {

    return (
        <S_group className='group'>
            <S_formInput className='from-input' onChange={handleChange} {...otherProps} />
            {
                label ?
                <S_formInputLabel className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >
                    {label}
                </S_formInputLabel> : null
            }
        </S_group>
    )
};

export default FormInput;

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabel = `
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

const S_group = styled.div`
  position: relative;
  margin: 45px 0;
`;

const S_formInput = styled.input`
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

    &:focus ~ .form-input-label {
        ${shrinkLabel}
    }
`;

 const S_formInputLabel = styled.label`
   color: ${subColor};
   font-size: 16px;
   font-weight: normal;
   position: absolute;
   pointer-events: none;
   left: 5px;
   top: 10px;
   transition: 300ms ease all;

    &.shrink {
        ${shrinkLabel}
    }
 `;