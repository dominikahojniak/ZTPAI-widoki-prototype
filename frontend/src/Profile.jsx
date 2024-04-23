
import React from 'react';
import './Profile.css'; 
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import profileImage from './img/duzeprofil.svg';
const Profile = () => {
    return (
        <div className='profile-container'>
            <Header activePage="profile" />
            <main className='main-profile'>
                <div className="profile">
                    Profile
                </div>
                <div className="profilepic">
                    <img className="profile-image" src={profileImage} alt="Profile Image" />
                </div>
                <div className="news-profile">
                    <div className="name-profile">Name</div>
                    <div className="email-profile">email@gmail.com</div>
                    <a href="/login" className="logout-profile">Log out</a>
                </div>
            </main>
            <Footer showProfileAndHello={false}/>
        </div>
    );
}

export default Profile;