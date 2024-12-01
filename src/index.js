import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '../src/assets/css/all.min.css'
import '../src/assets/css/general_styles.css'
import '../src/assets/css/normalize.css'

import './assets/webfonts/fa-brands-400.svg'
import './assets/webfonts/fa-regular-400.svg'
import './assets/webfonts/fa-solid-900.svg'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
