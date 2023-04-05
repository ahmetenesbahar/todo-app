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
  hide: "" | "hide";
  setHide: React.Dispatch<React.SetStateAction<"" | "hide">>;
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
  hide: "",
  setHide: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [hide, setHide] = useState<"hide" | "">("");
  const localUser = (user: { username: string }) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const localUserCheck = () => {
    const getlocalUser = localStorage.getItem("user");
    if (getlocalUser) {
      const user = JSON.parse(getlocalUser);
      setUser(user);
      setIsLoggedIn(true);
      setHide("hide");
    }
    if (!getlocalUser) {
      setIsLoggedIn(false);
      setHide("");
    }
  };

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
    localUser,
    localUserCheck,
    hide,
    setHide,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserContext;
export const useUserContext = () => useContext(UserContext);
