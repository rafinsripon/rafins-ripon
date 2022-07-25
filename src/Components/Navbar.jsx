import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';

function Navbar() {
  return (
    <nav className='nav_bar'>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="logo">
                        <img src={logo} alt="Img Not Found" />
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="main_menu">
                        <ul className='main_item'>
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/services'>Services</Link>
                            <Link to='/contact'>Contact</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;