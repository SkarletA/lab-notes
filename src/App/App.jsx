import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.module.css';
// import { Main } from '../Main/Main';
// import { NavBar } from '../NavBar/NavBar';
import { Blog } from '../Blog/Blog';
import NotFound from '../NotFound/NotFound';
import { Home } from './Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
