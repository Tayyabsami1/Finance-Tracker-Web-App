import React from 'react'
import '../Css/Signup.css';
import { Link } from 'react-router-dom'
import {useState} from 'react';
const SignUp = ({onLogin}) => {

  const gradientColors = 'linear-gradient(45deg, #2E76B3, #4A8FD1, #2F5BB6)';
  const initialSrc = 'https://img.icons8.com/ios/50/FFFFFF/visible--v1.png';
  // Other image source
  const otherSrc = 'https://img.icons8.com/ios/50/FFFFFF/hide.png';

  const [imageSrc, setImageSrc] = useState(initialSrc);

  const [myinputype,setInputType]= useState('password');

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

  const textStyle = {

    backgroundImage: gradientColors,
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    fontWeight: 'bold',
    textDecoration: 'underline',
    fontFamily: 'YourStylishFont, sans-serif',
    fontSize: '40px', // Adjust the font size as needed
    textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)', // Add a subtle text-shadow effect
  };


  return (
    <>
      <div className='SignUp'>
        <div className='start-line'>
          <h3 style={textStyle}>Money Sparks</h3>
        </div>
        <div className="wrapper">
          <form action="">
            <h1>Sign Up</h1>
            <div className="input-box">
              <input type="text" placeholder='Username ' required />
              <img width="25" height="25" src="https://img.icons8.com/pastel-glyph/64/FFFFFF/user-male-circle.png" alt="user-male-circle" />
            </div>
            <div className="input-box">
              <input type="email" placeholder='Email ' required />
              <img width="25" height="25" src="https://img.icons8.com/ios/50/FFFFFF/new-post--v1.png" alt="new-post--v1" />
            </div>

            <div className="input-box">
              <input type={myinputype} placeholder='Password' />
              <img width="25" height="25" onClick={handleImageClick}  src={imageSrc} alt="visible--v1" />
            </div>

            <button onClick={onLogin} type='submit' className='btn'>Sign Up</button>

            <div className="register-link">
              <p>Already have an account <Link to="/Login"> <label>Login</label></Link> </p>

            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp
