// UserContext.js
import { createContext, useContext, useState } from 'react';
import data from '../src/assets/data.json'
const UserContext = createContext();
const getUserDataFromLocalStorage = () => {
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserDataFromLocalStorage());
   
  const login = (userData) => {
    setUser(userData);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ data,user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
