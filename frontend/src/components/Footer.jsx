import React from 'react';
import linkedin from '../img/linkedin.svg';
import facebook from '../img/fb.svg';
import ig from '../img/ig.svg';
import './footer.css';
const Footer = () => {
    return (
        <footer className="footer-id">
            <ul className="footer-list">
                <li><a href="help.html">Help</a></li>
                <li><a href="aboutUs.html">About Us</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div className="media-footer">
                <a href="https://www.linkedin.com/notifications/?filter=all" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                <a href="https://www.facebook.com/?locale=pl_PL" target="_blank"><img src={facebook} alt="facebook" /></a>
                <a href="https://www.instagram.com" target="_blank"><img src={ig} alt="instagram" /></a>
            </div>
        </footer>
    );
}

export default Footer;