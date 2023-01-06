import React, { createContext, useState, useEffect } from "react";
import { defaultUser, IUser } from './common';

interface Props {
  children: React.ReactNode;
}

const UserContext = createContext<any | null>(null);

export interface LayouUserContextProviderProps  { 
  children: React.ReactNode
}

const UserContextProvider: React.FC<Props> = ({ children }) => {

  const [user, setUser] = useState<IUser | null>(defaultUser);

  useEffect(() => {
    let storedUser: IUser = localStorage.user ? JSON.parse(localStorage.user) : null;

    if (storedUser) {
      setUser(storedUser)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user]);

  function updateUser(updatedUser: IUser) {
    setUser(updatedUser);
  }

  return (
    <UserContext.Provider value={{user, updateUser}}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
