import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginPage,  SignUpPage,Home, CreateProduct} from "./Routes.js";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/create-product" element={<CreateProduct />} />
      <Route path ="/create-product/:id" element={<CreateProduct/>}/>
      <Route path ="/product/:id" element={<CreateProduct/>}/>
    </Routes>
    </BrowserRouter>

    
  ) 
}

export default App


