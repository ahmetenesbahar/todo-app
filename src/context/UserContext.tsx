import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";

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

  const localUser = useCallback(
    (user: { username: string }) => {
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(user));
    },
    [isLoggedIn]
  );

  const localUserCheck = useCallback(() => {
    const getlocalUser = localStorage.getItem("user");
    if (getlocalUser) {
      setIsLoggedIn(true);
      const user = JSON.parse(getlocalUser);
      setUser(user);
    }
    if (!getlocalUser) {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

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
export default UserProvider;
export const useUserContext = () => useContext(UserContext);
