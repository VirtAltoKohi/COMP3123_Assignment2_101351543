// EmployeeDetails.js

import React, {useState, useEffect} from 'react';
import { useAuth } from '../contexts/AuthContext'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const EmployeeDetails = () => {
    const {isLoggedIn, getEmployeeId, setEmployeeId} = useAuth();
    const [employee, setEmployee] = useState([]);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        fetchEmployee();
    }, [])

    const fetchEmployee = async () => {
        try {
          // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
          const response = await axios.get(`http://localhost:3001/api/v1/emp/employee/${id}`);
          setEmployee(response.data);
        } catch (error) {
          console.error('Failed to fetch employees:', error.response.data);
          // Handle errors and display appropriate messages to the user
        }
      };
    
      const goBack = () => {
        navigate('/employee-list');
      }

    return (
        <>
          <div className="nice-form">
            <h2>Employee Details</h2>
            <div>
                <p>Employee First_Name: {employee.firstName}</p>
                <p>Employee Last_Name: {employee.lastName}</p>
                <p>Employee Email: {employee.email}</p>
            </div>
            <div>
                <button onClick={goBack}>Go Back</button>
            </div>
          </div>
        </>
    )
}

export default EmployeeDetails;