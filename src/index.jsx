import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';



hydrateRoot(document.getElementById('root'),
  <React.StrictMode>
    <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

