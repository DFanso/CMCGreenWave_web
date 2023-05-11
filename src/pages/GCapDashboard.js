import React from 'react';
import { Link } from 'react-router-dom';
import staffdash from '../images/staffdash.jpg';
import StaffDashNavbar from '../components/staffDashNavbar';
import Footer from '../components/Footer';


const GcapDashBoard = () => {


    const backgroundStyles = {
        backgroundImage: `url(${staffdash})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const reportIncidentButtonStyles = {
        backgroundColor: 'black',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '5px',
        fontSize: '1.2rem',
        textDecoration: 'none',
        marginTop: '1rem',
    };

    return (
        <div class="greenCapDash-conntent">
            <StaffDashNavbar />
            <div style={backgroundStyles}>
                <h1 style={{ color: '#fff', fontSize: '3rem' }}>Green Captain Dashboard</h1>
                <Link to="/IncidentPage" style={reportIncidentButtonStyles} >
                    View Incident
                </Link>
            </div>
            <Footer />
        </div>
    );
};

export default GcapDashBoard;

