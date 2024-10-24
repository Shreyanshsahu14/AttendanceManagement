import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import App from './App';
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from 'react-router-dom';

// Create a root element using the createRoot method
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
    <Toaster/>
    </BrowserRouter>
  </React.StrictMode>
);
