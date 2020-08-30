import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import 'normalize.css';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root{
        --textcolor: white;
    }

    #root{
    background-color: #222222;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);