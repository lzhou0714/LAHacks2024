import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import { SignInPage } from './pages/SignInPage';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </Router>
  )
}

export default App
