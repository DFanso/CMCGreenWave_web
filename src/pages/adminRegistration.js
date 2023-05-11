import React from 'react';
import './adminRegistration.css';

const RegistrationForm = () => {
    return (
        <div className="registration-form-container">
            <form>
                <input type="text" placeholder="Name" required />
                <input type="tel" placeholder="Contact No" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Address" required />
                <select required>
                    <option value="" disabled selected>
                        Registering as:
                    </option>
                    <option value="admin">Admin</option>
                    <option value="gcaptain">GCaptain</option>
                    <option value="gtf">GTF</option>
                </select>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
