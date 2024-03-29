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
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndConditions from './pages/TermAndConditions';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';
import CheckoutSuccess from './features/CheckoutSuccess';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import ChatPage from './pages/ChatPage';
import Chat from './pages/ChatPage/Chat';

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
          <Route path='reset-password/:token' element={<ResetPassword />} />
          <Route path='blog-details/:id' element={<SingleBlog />} />
          <Route path='product/:id' element={<SingleProduct />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='refund-policy' element={<RefundPolicy />} />
          <Route path='shipping-policy' element={<ShippingPolicy />} />
          <Route path='terms-conditions' element={<TermAndConditions />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='checkout-success' element={<CheckoutSuccess />} />
          <Route path='profile' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
          <Route path='order/:id' element={<Orders />} />
          <Route path='chat' element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
