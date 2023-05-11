import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';


// import images from './images';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <nav className="app__navbar">
            <div className='app__navbar-logo'>
                <a href="/" className='homepage-logo-link'><h1 className='app__navbar-heading'> <font color="#DAA520">CMC</font> GreenWave </h1></a>
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="/articles">Articles</a></li>
                <li className="p__opensans"><a href="/staff-login">Staff</a></li>
                <li className="p__opensans"><a href="/GCaptainLogin-login">GCaptain</a></li>
                <li className="p__opensans"><a href="/admin-login">Admin</a></li>
            </ul>
            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu color="#fff" fontsize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fromSzie={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen-links">
                            <li className="p__opensans"><a href="/articles">Articles</a></li>
                            <li className="p__opensans"><a href="/staff-login">Staff</a></li>
                            <li className="p__opensans"><a href="/GCaptainLogin-login">GCaptain</a></li>
                            <li className="p__opensans"><a href="/admin-login">Admin</a></li>
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    );
}

export default Navbar;