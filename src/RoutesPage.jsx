import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart, Home, Login, Store, SignUp, Accessories, Macbook } from './Pages'
import ProductDetails from './Pages/ProductDetails'

const RoutesPage = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='store/:id' element={<ProductDetails/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/accessories' element={<Accessories/>} />
            <Route path='/macbook' element={<Macbook/>} />
        </Routes>
    </>
  )
}

export default RoutesPage