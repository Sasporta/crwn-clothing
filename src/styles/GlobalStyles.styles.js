import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const CreateGlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 60px;
  }

  a {
      text-decoration: none;
      color: black;
  }

  * {
    box-sizing: border-box;
  }
`;

export default CreateGlobalStyle;