import React from 'react';
import logo from '../../logo.png';
import './Navbar.scss'
export default function Navbar() {
  return <div className="Navbar">
        <img src={logo} alt="tourLogo" />
        <ul className="nav-links">
            <li>
                <a href="/" className="nav-link">home</a>    
            </li>
            <li>
                <a href="/" className="nav-link">about</a>    
            </li>
            <li>
                <a href="/" className="nav-link active">tours</a>    
            </li>    
        </ul>
      </div>;
}
