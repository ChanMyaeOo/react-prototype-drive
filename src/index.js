import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './context/StateProvider';
import userReducer, { initialState } from './reducer/userReducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={userReducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

