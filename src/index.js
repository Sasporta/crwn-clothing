import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CreateGlobalStyle from './styles/GlobalStyles.styles'

ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <CreateGlobalStyle />
  </>,
  document.getElementById('root')
);


