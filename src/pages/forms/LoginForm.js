import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'))

    useEffect(() => {
        // Check if the useris logged in when the component mounts
        setIsLoggedIn(!!localStorage.getItem('token'));
    })

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/v1/user/login', {
                "userName": username,
                "password": password,
            });

            if (response.status === 200) {
                const data = response.data
                localStorage.setItem('token', data.status);
                setIsLoggedIn(true);
                // Additional logic for successful login
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            setError('An error occurred while logging in');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    }

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <p>Welcome, user!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2>Login</h2>
                    <form>
                        <label>
                            Username:
                            <input
                                type='text'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input
                                type='text'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <br />
                        <button type='button' onClick={handleLogin}>
                            Login
                        </button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
                </div>
            )}
        </div>
    );
};

export default LoginForm;