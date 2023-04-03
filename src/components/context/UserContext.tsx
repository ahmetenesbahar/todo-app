import React, { useState, useEffect, useContext, createContext } from "react";

interface IType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  user: {
    username: string;
    password: string;
  };
  setUser: React.Dispatch<
    React.SetStateAction<{
      username: string;
      password: string;
    }>
  >;
  localUserCheck: () => void;
  localUser: (user: { username: string }) => void;
}
const UserContext = createContext<IType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  user: {
    username: "",
    password: "",
  },
  setUser: () => {},
  localUser: () => {},
  localUserCheck: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const loginScreen = document.querySelector(".login-screen");
  const localUser = (user: { username: string }) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const localUserCheck = () => {
    const getlocalUser = localStorage.getItem("user");
    if (getlocalUser) {
      const user = JSON.parse(getlocalUser);
      setUser(user);
      setIsLoggedIn(true);
      loginScreen?.classList.add("hide");
    }
    if (!getlocalUser) {
      setIsLoggedIn(false);
      loginScreen?.classList.remove("hide");
    }
  };

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
    localUser,
    localUserCheck,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserContext;
