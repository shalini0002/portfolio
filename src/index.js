import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/app.css';
import './assets/scss/app.scss';
// import './index.css';
// import '../src/assets/sass/app.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

