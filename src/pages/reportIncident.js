import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import reportIncident from '../images/reportIncident.jpg';
import StaffDashNavbar from '../components/staffDashNavbar';
import './reportIncident.css';
import Footer from '../components/Footer';
import AddIncidentModal from './AddIncidentModal';
import UpdateIncidentModal from './updateIncidentModal';
import DeleteIncidentModal from './deleteIncidentModal';

const ReportIncident = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const backgroundStyles = {
        backgroundImage: `url(${reportIncident})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        minHeight: '93vh',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const openAddModal = () => {
        setIsAddModalOpen(true);
    };

    const closeAddModal = () => {
        setIsAddModalOpen(false);
    };

    const openUpdateModal = () => {
        setIsUpdateModalOpen(true);
    };

    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
    };

    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    return (
        <div className="reportIncident-content">
            <StaffDashNavbar />
            <div style={backgroundStyles}>
                <h1 style={{ color: '#fff', textAlign: 'center', frontSize: '3rem', paddingTop: '2rem' }}>
                    Report Incident
                </h1>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                    <button onClick={openAddModal} className="report-button">
                        Add
                    </button>
                    <button onClick={openUpdateModal} className="report-button">
                        Update
                    </button>
                    <button onClick={openDeleteModal} className="report-button">
                        Delete
                    </button>
                </div>
            </div>
            <Footer />
            <AddIncidentModal isOpen={isAddModalOpen} onRequestClose={closeAddModal} />
            <UpdateIncidentModal isOpen={isUpdateModalOpen} onRequestClose={closeUpdateModal} />
            <DeleteIncidentModal isOpen={isDeleteModalOpen} onRequestClose={closeDeleteModal} />
        </div>
    );
};

export default ReportIncident;
