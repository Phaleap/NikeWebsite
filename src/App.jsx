import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Slide from './pages/Slide'
import Shop from './pages/Shop'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgetPW from './pages/ForgetPW'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import ShopDetails from './pages/ShopDetails'

const App = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/slide" element={<Slide />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/forgetPW" element={<ForgetPW/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/shopDetails" element={<ShopDetails/>}/>
        
      </Routes>
    </>
  )
}

export default App
