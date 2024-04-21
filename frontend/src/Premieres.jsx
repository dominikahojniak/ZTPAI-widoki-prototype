import React from 'react';
import okladka from './img/okladka.jpg';
import malelogo from './img/malelogo.png';
import home from './img/home.svg';
import greenPremieres from './img/green-premieres.svg';
import toRead from './img/toRead.svg';
import search from './img/search.svg';
import profile from './img/profile.svg';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import './premieres.css'; 
const Premieres = () => {
    return (
        <div className="premieres-container">
            <Header activePage="premieres" />
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
            <Footer showProfileAndHello={false}/>
        </div>
    );
}

export default Premieres;