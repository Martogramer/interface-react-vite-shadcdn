import React, { createContext, ReactNode, useContext, useEffect } from "react";
import { create } from 'zustand';

interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user: User) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));

interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  updateUser: (data: User | null) => void;
  login: (user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const { isAuthenticated, user, login, logout } = useAuthStore();

  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      login(JSON.parse(userFromStorage));
    }
  }, [login]);

  const updateUser = (data: User | null) => {
    if (data) {
        login(data);
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        logout(); // Llamar a logout si data es nulo
        localStorage.removeItem("user");
      }
  };

  return (
    <AuthContext.Provider value={{ currentUser: user, isAuthenticated, updateUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
