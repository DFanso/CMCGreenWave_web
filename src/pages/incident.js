import React from 'react';
import incidentPic from '../images/incidentPic.jpg';
import './incident.css';
import StaffDashNavbar from '../components/staffDashNavbar';
import Footer from '../components/Footer';

const IncidentPage = () => {
    return (
        <div className='incidentPage-contentt'>
            <StaffDashNavbar />
            <div className='incident-page-container' style={{ backgroundImage: `url(${incidentPic})`, height: '93vh' }}>
                <h1 className='incident-page-heading'>Incidents</h1>
                <div className="incidents-container">
                    <div className='incident-box'>
                        <p className='incident-name'>Incident Name</p>
                        <p className='incident-address'>Address</p>
                        <a href='/incidentDetail' className='view-more-link'>View More</a>
                    </div>
                    <div className='incident-box'>
                        <p className='incident-name'>Incident Name</p>
                        <p className='incident-address'>Address</p>
                        <a href='/incidentDetail' className='view-more-link'>View More</a>
                    </div>
                    <div className='incident-box'>
                        <p className='incident-name'>Incident Name</p>
                        <p className='incident-address'>Address</p>
                        <a href='/incidentDetail' className='view-more-link'>View More</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default IncidentPage;