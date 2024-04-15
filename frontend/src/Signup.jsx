import React from 'react';
import './signup.css'; 
import Footer from './components/Footer';
import mobilelogo from './img/malelogo.png';
import NavigationBefore from './components/NavigationBefore';
const SignUp = () => {
    return (
        <div className="signup-container">
            <NavigationBefore />
            <main className="signup-main">
                <div className="signup">
                    <form className="form">
                        <div className="form-login">
                            <p id="changeToLogin"><a href="login.html">Login</a></p>
                        </div>
                        <h1 id="signup-title">Sign Up</h1>
                        <div className="logoPhoto">
                            <img src={mobilelogo} alt="logo" />
                        </div>
                        <input name="name" type="text" placeholder="name" id="name" />
                        <input name="email" type="text" placeholder="email" id="email" />
                        <input name="password" type="password" placeholder="password" id="password" />
                        <button type="submit" id="signup-button"> SIGN UP </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default SignUp;