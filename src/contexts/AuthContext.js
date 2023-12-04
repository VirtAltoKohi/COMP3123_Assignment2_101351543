// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [eid, setEid] = useState('');

  const login = () => {
    setLoggedIn(true);
  };
  const logout = () => {
    setLoggedIn(false)
  };
  const signup = () => {
    setLoggedIn(true)
  }
  const setEmployeeId = (eid) => {
    setEid(eid);
  }

  const displayEmployeeId = () => {
    console.log(getEmployeeId());
  }

  const getEmployeeId = () => {
    return eid;
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, signup, setEmployeeId, displayEmployeeId, getEmployeeId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
