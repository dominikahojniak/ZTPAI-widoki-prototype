import React from 'react';
import './home.css'; 
import linkedin from './img/linkedin.svg';
import facebook from './img/fb.svg';
import ig from './img/ig.svg';
import maleprofil from './img/maleprofil.svg';
import okladka from './img/okladka.jpg';
import malelogo from './img/malelogo.png';
import greenHome from './img/green-home.svg';
import premieres from './img/premieres.svg';
import toRead from './img/toRead.svg';
import search from './img/search.svg';
import profile from './img/profile.svg';
const Home = () => {
    return (
        <div className="home-container">
               <nav className="home-nav">
            <ul>
                <li><div className="images-container"><img src={malelogo} alt="logo" /></div></li>
                <li><a href="home"><img src={greenHome} alt="Home" />Home</a></li>
                <li><a href="premieres"><img src={premieres} alt="Premieres" />Premieres</a></li>
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
                <div className="description">
                    <h3>Discover the stories you've been searching for<br />and the places to find them. </h3>
                    <p>Join justStory, your key to book premieres, and unlock the door to a world of<br />reading possibilities.</p>
                </div>
                <div className="catalog">
                    Catalog
                </div>
                <div className="news">
                <div className="news-container">
                        <img className="news-image" src={okladka} alt="News Image 1" />
                        <div className="news-description">
                            <h3>Title 1</h3>
                        </div>
                    </div>
                    <div className="news-container">
                        <img className="news-image" src={okladka} alt="News Image 2" />
                        <div className="news-description">
                            <h3>Title 2</h3>
                        </div>
                    </div>
                    <div className="news-container">
                        <img className="news-image" src={okladka} alt="News Image 2" />
                        <div className="news-description">
                            <h3>Title 2</h3>
                        </div>
                    </div>
                    <div className="news-container">
                        <img className="news-image" src={okladka} alt="News Image 2" />
                        <div className="news-description">
                            <h3>Title 2</h3>
                        </div>
                    </div>
                    <div className="news-container">
                        <img className="news-image" src={okladka} alt="News Image 2" />
                        <div className="news-description">
                            <h3>Title 2</h3>
                        </div>
                    </div>
                    <div className="news-container">
                        <img className="news-image" src={okladka} alt="News Image 2" />
                        <div className="news-description">
                            <h3>Title 2</h3>
                        </div>
                    </div>
                    <div className="news-container">
                        <img className="news-image" src={okladka} alt="News Image 2" />
                        <div className="news-description">
                            <h3>Title 2</h3>
                        </div>
                    </div>
                    <div className="news-container">
                        <img className="news-image" src={okladka} alt="News Image 2" />
                        <div className="news-description">
                            <h3>Title 2</h3>
                        </div>
                    </div>
                    <div className="news-container">
                        <img className="news-image" src={okladka} alt="News Image 2" />
                        <div className="news-description">
                            <h3>Title 2</h3>
                        </div>
                    </div>
                    <div className="news-container">
                        <img className="news-image" src={okladka} alt="News Image 2" />
                        <div className="news-description">
                            <h3>Title 2</h3>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <ul class="home-footer">
                    <li><a href="help.html">Help</a></li>
                    <li><a href="aboutUs.html">About Us</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li>Hello</li>
                </ul>
                <div className="media">
                    <a href="https://www.linkedin.com/notifications/?filter=all" target="_blank"><img src={linkedin} alt="LinkedIn" /></a>
                    <a href="https://www.facebook.com/?locale=pl_PL" target="_blank"><img src={facebook} alt="Facebook" /></a>
                    <a href="https://www.instagram.com" target="_blank"><img src={ig} alt="Instagram" /></a>
                    <a href="profile"><img src={maleprofil} alt="Male Profile" /></a>
                </div>
            </footer>
        </div>
    );
}

export default Home;