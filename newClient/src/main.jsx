import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Admin from './Admin.jsx';
import { ActiveLinkContext } from './context/ActiveLinkContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ActiveLinkContext>
      <App />
    </ActiveLinkContext>
  </React.StrictMode>,
);
