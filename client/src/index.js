import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </BrowserRouter>, document.getElementById('root')
);
