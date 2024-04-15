import React from 'react';
import malelogo from '../img/malelogo.png';
import './navigationBefore.css';
const NavigationBefore = () => {
    return (
        <nav class="navBefore">
            <ul>
                <li><div className="images-container"><img src={malelogo} alt="logo" /></div></li>
                <li><a href="home">Home</a></li>
                <li><a href="premieres">Premieres</a></li>
                <li><a href="toRead">To Read</a></li>
                <li><a href="search">Search</a></li>
                <div className="loginsignup">
                    <a href="login.html">Log In</a>
                    <a href="signup.html" id="signup-link">Sign Up</a>
                </div>
            </ul>
        </nav>
    );
}

export default NavigationBefore;