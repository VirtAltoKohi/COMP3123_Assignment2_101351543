// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import './Navbar.css'

function Navbar() {
    const { isLoggedIn, logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        // Perform logout logic, update context, etc.
        logout();
        navigate('/Login')
    };

    return (
        <nav className="top-navbar">
            <ul>
                {isLoggedIn ? (
                    <>
                        <li><Link to="Employee-list">Dashboard</Link></li>
                        <li><button onClick={handleLogout} className="nav-logout">Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/Login">Login</Link></li>
                        <li><Link to="/Signup">Signup</Link></li>
                    </>
                    
                )}
            </ul>
        </nav>
    )
}

export default Navbar