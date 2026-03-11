import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import App from './App.jsx';

import "./assets/css/bootstrap.css";
import "./assets/css/styles.css";
// import "../src/components/FirstSection/style.css";




createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
