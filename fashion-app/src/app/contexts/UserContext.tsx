"use client";
import { createContext, useState, ReactNode, useContext } from 'react';

interface UserContextType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);
  
    return (
      <UserContext.Provider value = {{isLoggedIn, login, logout}}>
        {children}
      </UserContext.Provider>
    );
  };
  
// Hook to use UserContext in other components
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('Hook must be used within a UserProvider');
    }
    return context;
};
    