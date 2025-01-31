import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage,SignUpPage,Home} from './Routes.js';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/' element = {<Home/>}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
