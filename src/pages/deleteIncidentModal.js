import React, { useState } from 'react';
import Modal from 'react-modal';
import './deleteIncidentModal.css';

Modal.setAppElement('#root');

const DeleteIncidentModal = ({ isOpen, onRequestClose }) => {
    const [incidentId, setIncidentId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Delete the incident data from the server based on the incidentId
        // ...
        // Close the modal
        onRequestClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <div className="modal-header">
                <h2>Delete Incident</h2>
                <button onClick={onRequestClose}>X</button>
            </div>
            <div className="modal-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="incidentId">Search by ID:</label>
                        <input
                            type="text"
                            id="incidentId"
                            value={incidentId}
                            onChange={(e) => setIncidentId(e.target.value)}
                            placeholder="Enter the ID of the incident to delete"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Delete</button>
                        <button type="button" onClick={onRequestClose}>
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default DeleteIncidentModal;
