import React, { useContext, useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContext = React.createContext({
  isLoggedIn: false,
  user: {},
  login: (email, password) => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(auth.currentUser);
  const isLoggedIn = !!user;

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    setUser(auth.currentUser);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const value = {
    user,
    isLoggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
