import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import './EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const { isLoggedIn, setEmployeeId, displayEmployeeId, getEmployeeId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the employee data from the backend when the component mounts
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
      const response = await axios.get('http://localhost:3001/api/v1/emp/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Failed to fetch employees:', error.response.data);
      // Handle errors and display appropriate messages to the user
    }
  };

  const handleDetails = (employeeId) => {
    // Handle the "Details" button click for the specific employee
    console.log(`Details button clicked for employee with ID: ${employeeId}`);
    navigate(`/employee/${employeeId}`)
    // Add your logic to navigate to the employee details page or display details in a modal
  };

  const handleUpdate = (employeeId) => {
    // Handle the "Update" button click for the specific employee
    console.log(`Update button clicked for employee with ID: ${employeeId}`);
    navigate(`/update-employee/${employeeId}`);
    // Add your logic to navigate to the employee update page or display an update form
  };

  const handleDelete = async (employeeId) => {
    // Handle the "Delete" button click for the specific employee
    try {
      // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
      await axios.delete(`http://localhost:3001/api/v1/emp/employees/${employeeId}`);
      // Refresh the employee list after deletion
      fetchEmployees();
    } catch (error) {
      console.error('Failed to delete employee:', error.response.data);
      // Handle errors and display appropriate messages to the user
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <div className="EmployeeList">
            <h2>Employee List</h2>
            <div>
              <button onClick={() => {navigate('/add-employee')}}>Add Employee</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>
                      <button 
                        onClick={() => handleDetails(employee['_id'])}
                        id="btn-details">
                          Details
                        </button>
                      <button 
                        onClick={() => handleUpdate(employee['_id'])}
                        id="btn-update">
                          Update
                        </button>
                      <button 
                        onClick={() => handleDelete(employee['_id'])}
                        id="btn-delete">
                          Delete
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
        
      ) : (
        <>
          <h2>Access prohibated unless logged in</h2>
        </>
      )}
    </div>
  );
};

export default EmployeeList;
