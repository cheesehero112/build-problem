import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';
import { GlobalStyle } from './styles/styles';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Form />
  </React.StrictMode>
);
