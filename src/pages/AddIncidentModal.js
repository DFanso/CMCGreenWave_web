import React, { useState } from 'react';
import Modal from 'react-modal';
import './AddIncidentModal.css';

Modal.setAppElement('#root');

const AddIncidentModal = ({ isOpen, onRequestClose }) => {
    const [incidentName, setIncidentName] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the form data to the server
        // ...
        // Close the modal
        onRequestClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <div className="modal-header">
                <h2>Add Incident</h2>
                <button onClick={onRequestClose}>X</button>
            </div>
            <div className="modal-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="incidentName">Incident Name:</label>
                        <input
                            type="text"
                            id="incidentName"
                            value={incidentName}
                            onChange={(e) => setIncidentName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image:</label>
                        <input
                            type="file"
                            id="image"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <div className="form-group">
                        <label>Map:</label>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.703584252422!2d-73.981274384608!3d40.76835997932822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDUzJzE0LjYiTiA3M8KwNTAnMjMuMiJX!5e0!3m2!1sen!2sus!4v1620746471211!5m2!1sen!2sus" width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={onRequestClose}>Close</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default AddIncidentModal;
