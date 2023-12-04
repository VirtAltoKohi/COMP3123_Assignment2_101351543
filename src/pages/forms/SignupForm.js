import React, { useState } from 'react';
import axios from 'axios';

import { useAuth } from '../../contexts/AuthContext'


const Signup = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
      const response = await axios.post('http://localhost:3001/api/v1/user/signup', formData);

      console.log('Signup successful:', response.data);
      login();
      // Optionally, you can redirect the user to a login page or do other actions after successful signup
    } catch (error) {
      console.error('Signup failed:', error.response.data);
      // Handle errors and display appropriate messages to the user
    }
  };

  return (
    <div class="nice-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="userName" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;