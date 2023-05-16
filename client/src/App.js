//pulling in needed packages
import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';

//importing pages
import Landing from './pages/Landing.js';
import Dashboard from './pages/Dashboard.js';
import Login from './pages/Login.js';
import UserRegister from './pages/UserRegister.js';

//importing components
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {

  //setting state
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);

  // function to check if user is logged in
  useEffect(() => {
    axios.get('/auth/authenticated')
      .then(res => {
        setUser(res.data.user);
        setUserType(res.data.type);
      })
  }, []);

  return (
    <>
    <Routes>
      <Route path="/" element={<Landing user={user} setUser={setUser} />} />
      <Route path="/login" element={<Login user={user} setUser={setUser} setUserType={setUserType}/>} />
      <Route path="/userregister" element={<UserRegister user={user} setUser={setUser} />} />
      <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} userType={userType}/>} />
    </Routes>
    </>
  )
}

export default App;