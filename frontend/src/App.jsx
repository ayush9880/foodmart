import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes, useLocation } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'
import NewPassword from './components/NewPassword'
import VerifyOtp from './components/VerifyOtp'
import GetOtp from './components/GetOtp'
import AdminLogin from './components/admin/AdminLogin'
import AdminLayout from './components/AdminLayout'
import ProtectedRoute from './components/ProtectedRoute'
import Users from './components/admin/Users'
import Products from './components/admin/ProductList'
import ProductList from './components/admin/ProductList'
import AddProduct from './components/admin/AddProduct'
import EditProduct from './components/admin/EditProduct'
import Cart from './components/Cart'
import Dashboard from './components/admin/Dashboard'
import Wishlist from './components/Wishlist'
import ProfilePage from './components/ProfilePage'

export default function App() {
  let location = useLocation();
  return (
    <>
      {!location.pathname.includes("admin") && <Navbar />}
      <Routes>
        <Route path='/admin' element={<AdminLogin />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/products" element={<ProductList />} />
          <Route path='/admin/products/add' element={<AddProduct />} />
          <Route path='/admin/products/edit/:id' element={<EditProduct />}></Route>
        </Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/wishlist' element={<Wishlist />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
        <Route path='/forgetPassword' element={<GetOtp />}></Route>
        <Route path='/varifyOtp' element={<VerifyOtp />}></Route>
        <Route path='/newPassword' element={<NewPassword />}></Route>
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
      {!location.pathname.includes("admin") && <Footer />}

    </>
  )
}


