import React from 'react';
import './Navbar.css';
import navlogo from '../../assets/logo.png';
import navprofile from '../../assets/cartoon-profile.jpg';

const Navbar=()=>{
   return(
    <div className="navbar">
       
        <img src={navlogo} alt="" className="nav-logo" style={{width:60}} />
        <img src={navprofile} alt="nav-profile"  style={{width:50}}/>
    </div>
   )
}
export default Navbar;