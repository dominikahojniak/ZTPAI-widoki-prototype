import React from 'react';
import okladka from './img/okladka.jpg';
import malelogo from './img/malelogo.png';
import home from './img/home.svg';
import greenPremieres from './img/green-premieres.svg';
import toRead from './img/toRead.svg';
import search from './img/search.svg';
import profile from './img/profile.svg';
import Footer from './components/Footer';
import './premieres.css'; 
const Premieres = () => {
    return (
        <div className="premieres-container">
            <nav className="nav-premieres">
                <ul>
                    <li>
                        <div className="images-container-premieres">
                            <img src={malelogo} alt="Male Logo" />
                        </div>
                    </li>
                    <li><a href="home"><img src={home} alt="Home" />Home</a></li>
                    <li><a href="premieres" className="Navpremieres"><img src={greenPremieres} alt="Premieres" />Premieres</a></li>
                    <li><a href="toRead"><img src={toRead} alt="To Read" />To Read</a></li>
                    <li><a href="search"><img src={search} alt="Search" />Search</a></li>
                    <li><a href="profile"><img src={profile} alt="Profile" />Profile</a></li>
                    <div className="loginsignup">
                        <a href="login.html">Log In</a>
                        <a href="signup.html" id="signup-link">Sign Up</a>
                    </div>
                </ul>
            </nav>
            <main>
                <div className="premieres">
                    Premieres
                </div>
                <div className="news-premieres">
                    <div className="news-container-premieres">
                        <div className="date"> <h3>Date</h3> </div>
                        <div className="right-premieres">
                            <div className="news-description-premieres">
                                <p>Title</p>
                            </div>
                            <img className="news-image-premieres" src={okladka} alt="News Image 1" />
                        </div>
                    </div>
                    <div className="news-container-premieres">
                        <div className="date"> <h3>Date</h3> </div>
                        <div className="right-premieres">
                            <div className="news-description-premieres">
                                <p>Title</p>
                            </div>
                            <img className="news-image-premieres" src={okladka} alt="News Image 1" />
                        </div>
                    </div>
                    
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Premieres;