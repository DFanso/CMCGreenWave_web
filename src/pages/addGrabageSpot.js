import React from 'react';
import './addGrabageSpot.css';
import addGarbageSpot from '../images/addGarbageSpot.jpg';
import StaffDashNavbar from '../components/staffDashNavbar';
import Footer from '../components/Footer';

const AddGarbageSpot = () => {
    return (
        <div className='AddGarbageSpot-content'>
            <StaffDashNavbar />
            <div className="add-garbage-spot-container" style={{ backgroundImage: `url(${addGarbageSpot})` }}>
                <div className="add-garbageform-container">
                    <form>
                        <h3 className="addGarbage-form-hedaing">Add Garbage Spot</h3>
                        <input type="text" placeholder="Incident Name" required />
                        <input type="text" placeholder="Address" required />
                        <textarea placeholder="Description" required />
                        <input type="file" placeholder="File Upload" required />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d253464.9389233057!2d79.8195517941491!3d6.963274941390885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d7.101909699999999!2d79.95284439999999!4m5!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2sNSBM%20Green%20University%2C%20Pitipana%20-%20Thalagala%20Rd%2C%20Homagama!3m2!1d6.8213291!2d80.04157289999999!5e0!3m2!1sen!2slk!4v1683795069235!5m2!1sen!2slk"
                        width="600"
                        height="418"
                        style={{ border: '0' }}
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

export default AddGarbageSpot;
