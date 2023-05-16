//pulling in needed packages
import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';

//importing pages
import Landing from './pages/Landing.js';
import Dashboard from './pages/Dashboard.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';

//importing components
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {

  //setting state
  const [user, setUser] = useState(null);

  //function to check if user is logged in
  // useEffect(() => {
  //   axios.get('/auth/authenticated', { withCredentials: true })
  //     .then(res => {
  //       setUser(res.data.user);
  //     })
  // }, []);

  return (
    <>
    <Routes>
      <Route path="/" element={<Landing user={user} setUser={setUser} />} />
      <Route path="/login" element={<Login user={user} setUser={setUser} />} />
      <Route path="/register" element={<Register user={user} setUser={setUser} />} />
      <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />} />
    </Routes>
    </>
  )
}

export default App;