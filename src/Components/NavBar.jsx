import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import logo from '../Assets/Logo.png'
import '../Css/NavBar.css'

const NavBar = () => {
  const ImgSrc="https://img.icons8.com/glyph-neue/64/xbox-menu.png";
  const TempSrc="https://img.icons8.com/ios-filled/50/multiply.png";
  const [ImgSrc2, setImageSrc] = useState(ImgSrc);
  const location = useLocation();

  useEffect(() => {
    const dropDownMenu = document.querySelector('.dropdown_menu');
    console.log(dropDownMenu);
  }, []);

  const [currentPath, setCurrentPath] = useState(location.pathname);


  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const handleImageClick = () => {
    const dropDownMenu = document.querySelector('.dropdown_menu');
    if (dropDownMenu) {
      dropDownMenu.classList.toggle('open');
      
      if (dropDownMenu.classList.contains('open')) {
        setImageSrc(TempSrc);
      } else {
        setImageSrc(ImgSrc);
      }
    }

    
  };
  return (
    <header className='MyNav'>
      <div className="navbar">
        <div style={{ display: 'flex', flexDirection: 'row' }} className="logo">
          <h4 style={{ alignSelf: 'center' }}>Money Sparks</h4>
          <div style={{}}>
            <img style={{ height: '70px', width: '70px' }} src={logo} alt="" />
          </div>
        </div>
        <ul className="links">
          <li> <Link className={currentPath==='/'?'active':''} style={{ textDecoration: 'none'}} to="/">Home</Link></li>
          <li> <Link className={currentPath==='/Income'?'active':''} style={{ textDecoration: 'none'}} to="/Income">Income</Link></li>
          <li> <Link className={currentPath==='/Expense'?'active':''} style={{ textDecoration: 'none'}} to="/Expense">Expense</Link></li>
          <li> <Link className={currentPath==='/Reports'?'active':''} style={{ textDecoration: 'none'}} to="/Reports">Reports</Link></li>
          <li> <Link className={currentPath==='/Settings'?'active':''} style={{ textDecoration: 'none'}} to="/Settings">Settings</Link></li>
        </ul>
        <div onClick={handleImageClick}style={{ marginRight: '10px' }} className="toggle_btn">
          <img width="50" height="45" src={ImgSrc2} alt="xbox-menu" />
        </div>
      </div>

      <div className="dropdown_menu">
        <li> <Link style={{ textDecoration: 'none' }} to="/">Home</Link></li>
        <li> <Link style={{ textDecoration: 'none' }} to="/Income">Income</Link></li>
        <li> <Link style={{ textDecoration: 'none' }} to="/Expense">Expense</Link></li>
        <li> <Link style={{ textDecoration: 'none' }} to="/Reports">Reports</Link></li>
        <li> <Link style={{ textDecoration: 'none' }} to="/Settings">Settings</Link></li>
      </div>
    </header>
  )
}

export default NavBar
