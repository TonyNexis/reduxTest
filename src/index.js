import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import { Provider } from 'react-redux';

import Counter from './components/Counter';
import App from './components/App';

const store = configureStore({reducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
  </React.StrictMode>
);
 