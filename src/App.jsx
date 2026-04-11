import React from 'react'
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import SingleProduct from './Pages/SingleProduct'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
