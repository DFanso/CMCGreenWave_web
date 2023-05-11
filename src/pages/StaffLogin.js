import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StaffLogin.css';

const StaffLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/Staffdashboard');
    }

    return (
        <div className="staff-login-container">
            <form onSubmit={handleSubmit} className="staff-login-form">
                <h2 className="staff-login-heading">Staff Login</h2>
                <div className="staff-login-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="staff-login-field">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="staff-login-button">Login</button>
            </form>
        </div>
    );
}

export default StaffLogin;
