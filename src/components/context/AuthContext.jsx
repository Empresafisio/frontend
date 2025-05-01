import React, { createContext, useState, useContext } from "react";

// Cria o contexto
const AuthContext = createContext();

// Provedor de autenticação
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Estado para armazenar os dados do usuário

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData); // Define os dados do usuário
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null); // Remove os dados ao sair
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);
