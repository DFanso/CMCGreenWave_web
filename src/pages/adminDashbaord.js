import React from 'react';
import { useNavigate } from 'react-router-dom';
import './adminDashboard.css';
import staffdash from '../images/staffdash.jpg';
import Footer from '../components/Footer';
import StaffDashNavbar from '../components/staffDashNavbar';

function AdminDashboard() {
    const navigate = useNavigate();

    const handleCreateUser = () => {
        navigate('/registrationForm');
    };

    const handleAddArticle = () => {
        navigate('/addArticle');
    };

    const handleAddGarbage = () => {
        navigate('/addGrabageSpot');
    };

    return (
        <div class="admindash-contentt">
            <StaffDashNavbar />
            <div
                className="admin-dashboard-container"
                style={{ backgroundImage: `url(${staffdash})` }}
            >
                <h1 className="admin-dashboard-heading">Admin Dashboard</h1>
                <div className="admin-dashboard-buttons">
                    <button className="create-user-button" onClick={handleCreateUser}>
                        Create User Account
                    </button>
                    <button className="add-garbage-spot-button" onClick={handleAddGarbage}>Add Garbage Spot</button>
                    <button className="add-article-button" onClick={handleAddArticle}>Add Article</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminDashboard;
