import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CreateGlobalStyle from './styles/GlobalStyles.styles'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CreateGlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);


