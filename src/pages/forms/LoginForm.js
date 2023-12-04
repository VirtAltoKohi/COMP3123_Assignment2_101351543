import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext'

import './Form.css'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/v1/user/login', {
                "userName": username,
                "password": password,
            });

            if (response.status === 200) {
                login();
                navigate('/Employee-list')
            }
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <div>
            <div className="nice-form">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label>
                            Username:
                            <input
                                type='text'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                    </div>
                    
                    <br />
                    <div className="form-group">
                        <label>
                            Password:
                            <input
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    
                    <br />
                    <button type='button' onClick={handleLogin}>
                        Login
                    </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default LoginForm;