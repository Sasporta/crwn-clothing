import { createGlobalStyle } from "styled-components";

const CreateGlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 40px;
    cursor: default;
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