import React, { useState } from 'react';
import './adminLogin.css';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/AdminDashboard');
    }

    return (
        <div className="admin-login-container">
            <form onSubmit={handleSubmit} className="admin-login-form">
                <h2 className="admin-login-heading">Admin Login</h2>
                <div className="admin-login-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="admin-login-field">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="admin-login-button">Login</button>
            </form>
        </div>
    );
}

export default AdminLogin;
