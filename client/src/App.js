//pulling in needed packages
import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';

//importing pages
import Landing from './pages/Landing.js';
import Dashboard from './pages/Dashboard.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

//importing components
// import Header from './components/Header.js';
// import Footer from './components/Footer.js';

function App() {

  //setting state
  const [user, setUser] = useState(null);

  // function to check if user is logged in
  useEffect(() => {
    axios.get('/auth/authenticated')
      .then(res => {
        console.log(res.data.user)
        setUser(res.data.user);
      })
  }, []);

  return (
    <>
    <Header user={user}/>
    <Routes>
        <Route path="/" element={<Landing user={user} setUser={setUser} />} />
        <Route path="/dashboard" element={user ? <Dashboard setUser={setUser} user={user} /> : <Navigate to="/login" />} />
        <Route path="/login" element={!user ? <Login setUser={setUser} /> : <Navigate to="/dashboard" />} />
        <Route path="/register" element={!user ? <Register setUser={setUser} /> : <Navigate to="/dashboard" />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App;