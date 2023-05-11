import React from 'react';
import './staffUserProfile.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import staffUserProfile from '../images/staffProfile.jpg';

const StaffProfile = () => {
    // const user = {
    //     name: "John Doe",
    //     contactNo: "123-456-7890",
    //     email: "john.doe@example.com",
    //     address: "123 Main Street",
    //     post: "Staff",
    //     username: "johndoe"
    // };

    return (
        <div className='staffProfile-content'>
            <Navbar />
            <div className="staff-profile-container">
                <div className="background-image" style={{ backgroundImage: `url(${staffUserProfile})` }}>
                    <div className="staff-details-box">
                        <h2>User Profile</h2>
                        <div className="form-group">
                            <label>Name:</label>
                            {/* <div>{user.name}</div> */}
                        </div>
                        <div className="form-group">
                            <label>Contact No:</label>
                            {/* <div>{user.contactNo}</div> */}
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            {/* <div>{user.email}</div> */}
                        </div>
                        <div className="form-group">
                            <label>Address:</label>
                            {/* <div>{user.address}</div> */}
                        </div>
                        <div className="form-group">
                            <label>Post:</label>
                            {/* <div>{user.post}</div> */}
                        </div>
                        <div className="form-group">
                            <label>Username:</label>
                            {/* <div>{user.username}</div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StaffProfile;
