import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {LoginPage,SignUpPage,Home,CreateProduct,MyProducts,Cart,ProductDetails,Profile,CreateAddress,SelectAddress } from './Routes.js';
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
        {/* For new product */}
          <Route path="/create-product" element={<CreateProduct />} />
        {/* For edit product by id */}
          <Route path="/create-product/:id" element={<CreateProduct />} />
        {/* For viewing the user’s products */}
          <Route path="/my-products" element={<MyProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/create-address' element={<CreateAddress />} />
          <Route path='/select-address' element={<SelectAddress />} />
</Routes>
    </BrowserRouter>

  )
}

export default App
