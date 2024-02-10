import React from 'react'
import '../Css/Footer.css'

const Footer = ({ onlogout }) => {
 
  return (
    <div className='footerdata'>
      <div className="footermiddle">
        <p>CopyRight &copy;2023 Designed by Twilight Spark Team</p>
      </div>
    <div className='footerleft'>
      <div className="content">
        <p>Logout</p>
        </div>
        <div className='logo'>
        <img onClick={onlogout} width="25" height="30" src="https://img.icons8.com/ios/50/FFFFFF/exit--v1.png" alt="exit--v1"/>
      </div>
    </div>
    </div>
  )
}

export default Footer
