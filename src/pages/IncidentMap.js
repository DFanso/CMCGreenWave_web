import React from 'react';
import './IncidentMap.css';
import ArticleNavbar from '../components/articlesNavbar';
import Footer from '../components/Footer';
import incidentmapPic from '../images/incidentmapPic.jpg';

const IncidentMap = () => {
    return (
        <div className='incidentmapPage-content'>
            <ArticleNavbar />
            <div className="incident-map-container" style={{ backgroundImage: `url(${incidentmapPic})` }}>
                <div className="incident-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d253464.9389233057!2d79.8195517941491!3d6.963274941390885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d7.101909699999999!2d79.95284439999999!4m5!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2snsbm!3m2!1d6.8213291!2d80.04157289999999!5e0!3m2!1sen!2slk!4v1683743637301!5m2!1sen!2slk"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default IncidentMap;
