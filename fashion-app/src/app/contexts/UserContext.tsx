"use client";
import { createContext, useState, ReactNode, useContext } from 'react';

interface UserContextType {
    email: string | null | undefined;
    isLoggedIn: boolean;
    login: (email: string | null | undefined) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [email, setEmail] = useState<string | null | undefined>(null);
  
    const login = (userEmail: string | null | undefined) => {
      setEmail(userEmail);
      setIsLoggedIn(true);
    }
    const logout = () => {
      setIsLoggedIn(false);
      setEmail(null);
    }
    
  
    return (
      <UserContext.Provider value = {{email, isLoggedIn, login, logout}}>
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
    