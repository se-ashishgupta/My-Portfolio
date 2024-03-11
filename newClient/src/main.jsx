import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Admin from './Admin.jsx';
import { ActiveLinkContext } from './context/ActiveLinkContext.jsx';
import store from './redux/store/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ActiveLinkContext>
        <App />
      </ActiveLinkContext>
    </Provider>
  </React.StrictMode>,
);
