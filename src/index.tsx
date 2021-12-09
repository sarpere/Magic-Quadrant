import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ItemContextProvider } from './Contexts/ItemContext';

ReactDOM.render(
  <React.StrictMode>
    <ItemContextProvider>
      <App />
    </ItemContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
