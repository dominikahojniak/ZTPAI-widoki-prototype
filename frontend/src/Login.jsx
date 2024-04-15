import React from 'react';
import './login.css'; 
import mobilelogo from './img/malelogo.png';
import Footer from './components/Footer';
import NavigationBefore from './components/NavigationBefore';
const Login = () => {
    return (
        <div className="login-container">
            <NavigationBefore />
            <main className='login-main'>
                <div className="login">
                    <form className="form">
                        <h1 id="login-title">Log In</h1>
                        <div className="logoPhoto">
                            <img src={mobilelogo} alt="logo" />
                        </div>
                        <input name="email" type="text" placeholder="email" id="email" />
                        <input name="password" type="password" placeholder="password" id="password" />
                        <button type="submit" id="login-button"> LOG IN </button>
                        <div id='goToSignup' className='goToSignup'>
                            <div id='donthaveanaccount' className='donthaveanaccount'>
                                Don't have an account?
                            </div>
                            <a href="signup.html" className='signup'>
                                Sign Up
                            </a>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Login;