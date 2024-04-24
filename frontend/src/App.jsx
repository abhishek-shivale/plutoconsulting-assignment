import React from 'react'
import Login from './pages/Login'
import Regsiter from "./pages/Register";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HelloPage from './pages/HelloPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regsiter />} />
        <Route path="/" element={<HelloPage />} />
      </Routes>
    </Router>
  );
}

export default App