import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

