import React from 'react'
import '../Css/Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Login = ({ onLogin }) => {
  const initialSrc = 'https://img.icons8.com/ios/50/FFFFFF/visible--v1.png';
  // Other image source
  const otherSrc = 'https://img.icons8.com/ios/50/FFFFFF/hide.png';

  const [imageSrc, setImageSrc] = useState(initialSrc);

  const [myinputype, setInputType] = useState('password');

  // Function to handle image click and change the source
  const handleImageClick = () => {
    // Change the image source when clicked
    console.log(imageSrc);
    if (imageSrc === initialSrc) {
      setImageSrc(otherSrc);
      setInputType('text');

    }
    else {
      setImageSrc(initialSrc);
      setInputType('password');
    }
  };
  return (
    <>
      <div className='Login'>
        <div className='start-line'>
          <h3 >Welcome Back We missed you</h3>
        </div>
        <div className="wrapper">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder='Username ' required />
              <img width="25" height="25" src="https://img.icons8.com/pastel-glyph/64/FFFFFF/user-male-circle.png" alt="user-male-circle" />
            </div>

            <div className="input-box">
              <input type={myinputype} placeholder='Password' />
              <img width="25" onClick={handleImageClick} height="25" src={imageSrc} alt="visible--v1" />
            </div>

            <div className="remember-forgot">

              <label >
                <input type="checkbox" /> Remember Me
              </label>
              <label className='hoverLabel1'>
                <Link to="/" />Forgot Password?
              </label>
            </div>
            <button onClick={onLogin} type='submit' className='btn'>Login</button>

            <div className="register-link">
              <p>Don't have an account?<Link to="/SignUp" > <label>Register</label> </Link></p>

            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
