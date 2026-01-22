import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = localStorage.getItem('bookxpert_user');
    setUser(u);
  }, []);

  const login = (username) => {
    localStorage.setItem('bookxpert_user', username);
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem('bookxpert_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};