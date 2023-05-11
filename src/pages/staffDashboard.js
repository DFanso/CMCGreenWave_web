import React from 'react';
import './staffDashboard.css';
import staffdash from '../images/staffdash.jpg';
import StaffDashNavbar from '../components/staffDashNavbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const StaffDashboard = () => {
    const navigate = useNavigate();

    const handleReportFormClick = () => {
        navigate('/reportIncident');
    }

    return (
        <div className='staffdashboard-content'>
            <StaffDashNavbar />
            <div className="staff-dashboard-container" style={{ backgroundImage: `url(${staffdash})` }}>
                <div className="staff-dashboard-content">
                    <h1 className="staff-dashboard-heading">Green Task Force</h1>
                    <button className="staff-dashboard-button" onClick={handleReportFormClick}>Report Form</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default StaffDashboard;
