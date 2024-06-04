import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ContextType {
  name: string;
  setName: (name: string) => void;
}

const UserContext = createContext<ContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState<string>('John Doe');

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
