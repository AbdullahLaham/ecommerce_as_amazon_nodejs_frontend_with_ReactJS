import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Store from './pages/Store';
import Blogs from './pages/Blogs';
import CompareProduct from './pages/CompareProduct';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='store' element={<Store />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='compare-product' element={<CompareProduct />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='cart' element={<Cart />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignupPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='reset-password' element={<ResetPassword />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
