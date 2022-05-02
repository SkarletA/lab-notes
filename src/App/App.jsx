import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';
import { app } from '../Firebase/firebaseconfig';
import './App.module.css';
import { Blog } from '../Blog/Blog';
import NotFound from '../NotFound/NotFound';
import { Home } from './Home';
import { Principal } from './Principal';

export default function App() {
  const [isAuth, setIsAuth] = useState(null);
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuth(user);
      // const uid = user.uid;
      // console.log(uid, user);
    } else {
      setIsAuth(null);
    }
  });
  return (
    <BrowserRouter>
      {
        isAuth
          ? (
            <Routes>
              <Route path="/" element={<Principal />} />
              <Route path="/blog" element={<Blog name={isAuth} />} />
            </Routes>
          )
          : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )
}
    </BrowserRouter>
  );
}
