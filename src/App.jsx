import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home/Home"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Product from './components/Product/Product';
import Login from './components/Login/Login';
import Singup from './components/Login/Singup';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<Singup />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App