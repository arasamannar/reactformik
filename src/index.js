import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import BooksContextProvider from './context/books.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <BooksContextProvider>
    <App />
    </BooksContextProvider>
  </Router>

);