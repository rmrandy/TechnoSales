import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export function useUsers() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers(prevUsers => [...prevUsers, user]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
