import React, { useState, useEffect } from 'react';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import LoadingSpinner from './pages/Loader';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn"
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from './pages/Shop.jsx' 
import About from "./pages/About.jsx"
import TryUs from "./pages/Main.jsx"
import Community from './pages/CommunityPage.jsx'

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
    const timer = setTimeout(() => setLoading(false), 1500);
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
        <Route path='/about' element={<About />} />
        <Route path='/OurShop' element={<Shop/>} />
        <Route path='/TryUs' element={<TryUs/>} />
        <Route path='/community' element={<Community />} />
        <Route path='/signIn' element={<SignIn />} />
      </Routes>
      <div className="relative z-20 bottom-0">
        <Footer />
      </div>
    </Router>
  )
}

export default App;
