import React from 'react'
import Homepage from './pages/Homepage'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import LoadingSpinner from './pages/Loader'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import SignIn from "./pages/SignIn"

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
        </Routes>
        <div className="relative z-20">
          <Footer />
        </div>
      </Router>

  )
}

export default App