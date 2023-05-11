import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import indexPic1 from '../images/indexPic1.jpg';
import './Home.css';


function HomePage() {
    return (
        <div>
            <Navbar />
            <div className="homepage-cover">
                <h1 className="homepage-heading">Keeping our city clean and green</h1>
                <img src={indexPic1} className="homepage-cover-img" alt="My Image" />
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
