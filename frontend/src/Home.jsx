import React from 'react';
import './home.css'; 
import cover from './img/okladka.jpg';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import HomeBook from './components/HomeBook/HomeBook.jsx';
const Home = () => {
    return (
        <div id="home-page" className="home-container">
               <Header activePage="home" />
            <main>
                <div className="description">
                    <h3>Discover the stories you've been searching for<br />and the places to find them. </h3>
                    <p>Join justStory, your key to book premieres, and unlock the door to a world of<br />reading possibilities. </p>
                </div>
                <div className="catalog">
                    Catalog
                </div>
                <div className="news">
                <HomeBook imageSrc={cover} title="Title 1" />
                <HomeBook imageSrc={cover} title="Title 1" />
                <HomeBook imageSrc={cover} title="Title 1" />
                <HomeBook imageSrc={cover} title="Title 1" />
                <HomeBook imageSrc={cover} title="Title 1" />
                <HomeBook imageSrc={cover} title="Title 1" />
                <HomeBook imageSrc={cover} title="Title 1" />
                </div>
            </main>
            <Footer showProfileAndHello={true}/>
        </div>
    );
}

export default Home;