import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { Blog } from './Blog/Blog';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<Navigate replace to='/'/>} />
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);


