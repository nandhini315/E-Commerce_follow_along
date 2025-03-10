import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginPage,  SignUpPage,Home, CreateProduct,MyProducts,Cart,ProductDetails} from "./Routes.js";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/create-product" element={<CreateProduct />} />
      <Route path="/create-product/:id" element={<CreateProduct />} />

        <Route path="/myproducts" element={<MyProducts/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App