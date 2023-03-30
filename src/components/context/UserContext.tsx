import React, { useState, useEffect, useContext } from "react";

const UserContext = React.createContext({});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserContext;
