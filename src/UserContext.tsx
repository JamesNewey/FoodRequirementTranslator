import React, { createContext, useState, useEffect } from "react";
import IProfile from './common';

const defaultUser: IProfile = {
  allergies: [],
  intolerances: []
};

interface Props {
  children: React.ReactNode;
}

const UserContext = createContext<any | null>(null);

export interface LayouUserContextProviderProps  { 
  children: React.ReactNode
}

const UserContextProvider: React.FC<Props> = ({ children }) => {

  const [user, setUser] = useState<IProfile | null>(defaultUser);

  useEffect(() => {
    let storedUser: IProfile = localStorage.user ? JSON.parse(localStorage.user) : null;

    if (storedUser) {
      setUser(storedUser)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user]);

  function updateUser(updatedUser: IProfile) {
    setUser(updatedUser);
  }

  return (
    <UserContext.Provider value={{user, updateUser}}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
