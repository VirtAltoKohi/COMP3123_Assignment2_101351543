import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    salary: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
      const response = await axios.post('http://localhost:3001/api/v1/emp/employees', formData);

      console.log('Employee added successfully:', response.data);
      // Optionally, you can redirect the user to a different page or display a success message
    } catch (error) {
      console.error('Failed to add employee:', error.response.data);
      // Handle errors and display appropriate messages to the user
    }
  };

  return (
    <div className="nice-form">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Salary:
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            pattern="\d+(\.\d{1,2})?"
            required
          />
        </label>
        <br />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;