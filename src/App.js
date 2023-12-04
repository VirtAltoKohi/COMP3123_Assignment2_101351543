import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import Navbar from './pages/Navbar';

import Home from './pages/Home';
import Login from './pages/forms/LoginForm';
import Signup from './pages/forms/SignupForm';
import AddEmployee from './pages/forms/AddEmployeeForm';
import EmployeeList from './pages/EmployeeList';
import EmployeeDetails from './pages/EmployeeDetails';
import UpdateEmployee from './pages/forms/EmployeeUpdateForm';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          {/* Replace Switch with Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/employee-list" element={<EmployeeList />} />
            <Route path="/employee/:id" element={<EmployeeDetails />} />
            <Route path="/update-employee/:id" element={<UpdateEmployee />} />
            <Route path="/add-employee" element={<AddEmployee />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
