import React from 'react'
import Homepage from './pages/Homepage'

import Navbar from './components/Navbar'
import LoadingSpinner from './pages/Loader'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import SignIn from "./pages/SignIn"
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from './pages/Shop.jsx' // Make sure this path is correct

const router = createBrowserRouter([
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/",
    element: <Homepage />,
  }
])

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <LoadingSpinner />
      </div>
    );
  }
  return (
      <Router>
        <div className="relative z-20">
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signIn' element={<SignIn />} />
           <Route path='/shop' element={<Shop/>} />
        </Routes>
        <div className="relative z-20">
        
        </div>
      </Router>

  )
}

export default App