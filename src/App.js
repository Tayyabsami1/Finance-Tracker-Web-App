import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Error from './Components/Error'
import Income from './Components/Income';
import Reporting from './Components/Reporting'
import Settings from './Components/Settings'
import Expense from './Components/Expense';
function App() {
  const initialLoggedInState = localStorage.getItem('isLoggedIn') === 'true';
  const [isLoggedIn, setLoggedIn] = useState(initialLoggedInState);
  const { loginWithRedirect } =   useAuth0();
  const { logout } = useAuth0();
  // const {  isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);



  const handleLogin = () => {
    
    setTimeout(() => {
      loginWithRedirect();
    }, 200);

    setTimeout(() => {
      setLoggedIn(true);
    }, 1100);
  };
  

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
    logout({ logoutParams: { returnTo: window.location.origin } })
    setLoggedIn(false);
    }
    else{
      alert('Logout canceled');
    }
  };
  return (

    <BrowserRouter>
      {isLoggedIn && <NavBar path='/' />}
      <Routes>
        <Route
          path="/Login"
          element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/" replace />}
        />
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/Login" replace />}
        />
        <Route
          path='/SignUp'
          element={!isLoggedIn ? <SignUp onLogin={handleLogin} /> : <Navigate to="/" replace />}
        />

        <Route
          path="/Income"
          element={isLoggedIn ? <Income /> : <Navigate to="/Login" replace />}
        />

        <Route
          path="/Reports"
          element={isLoggedIn ? <Reporting /> : <Navigate to="/Login" replace />}
        />

        <Route
          path="/Settings"
          element={isLoggedIn ? <Settings /> : <Navigate to="/Login" replace />}
        />
        <Route
          path="/Expense"
          element={isLoggedIn ? <Expense /> : <Navigate to="/Login" replace />}
        />
        <Route path='*' element={<Error checker={isLoggedIn} />} />
      </Routes>
      {isLoggedIn && <Footer path='/' onlogout={handleLogout} />}
    </BrowserRouter>
  );
}

export default App;
