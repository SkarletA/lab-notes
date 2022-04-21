/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App/App';
import { Blog } from './Blog/Blog';
import { NotFound } from './NotFound/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById('root'),
);
