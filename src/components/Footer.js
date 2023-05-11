import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='app__footer'>
            <div className='app__footer-container'>
                <div className='app__footer-section'>
                    <h2><font color="#DAA520">CMC</font> GreenWave</h2>
                    <p>Copyright © 2023 CMC GreenWave
                        All Rights Reserved.</p>
                </div>
                <div className='app__footer-section'>
                    <h2>Contact Us</h2>
                    <p>No 455, Temple Road,<br />
                        Colombo</p>
                    <p>Phone: 0112346783</p>
                </div>
                <div className='app__footer-section'>
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Map</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Login/Register</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
