import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const authContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigation = useNavigate();
  const login = ({ userName }) => {
    setUser({ userName });
    navigation("/wiki");
  };
  const auth = {
    user,
    login,
  };
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
export function useAuth() {
  const auth = useContext(authContext);
  return auth;
}
