import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';


// import images from './images';
import './Navbar.css';

const ArticleNavbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <nav className="app__navbar">
            <div className='app__navbar-logo'>
                <a href="/" className='homepage-logo-link'><h1 className='app__navbar-heading'> <font color="#DAA520">CMC</font> GreenWave </h1></a>
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="/">Home</a></li>
                <li className="p__opensans"><a href="/IncidentMap">Incident Map</a></li>
            </ul>
            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu color="#fff" fontsize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fromSzie={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen-links">
                            <li className="p__opensans"><a href="/">Home</a></li>
                            <li className="p__opensans"><a href="/IncidentMapt">Incident Map</a></li>
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    );
}

export default ArticleNavbar;