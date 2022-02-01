import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Movies } from '../components/Movies';
import {NavbarPeliculas} from '../components/Navbar'


export const AppRouter = () => {
  return <div>
      <BrowserRouter>
        <NavbarPeliculas />
        <Routes>
            <Route path='/' element={<Movies/>} />
        </Routes>
      </BrowserRouter>
  </div>;
};
