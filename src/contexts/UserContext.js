// UserContext.js
import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Implement your login logic here
    setUser(userData);
  };

  const logout = () => {
    // Implement your logout logic here
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
