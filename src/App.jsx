import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import Aboutus from './pages/Aboutus'
import Getapi from './API/Getapi'
import Signup from './pages/Signup'

const App = () => {
  return (
    <>
    <Getapi/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/about' element={<Aboutus />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App