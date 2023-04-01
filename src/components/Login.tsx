import React from "react";
import { FaKey, FaUser } from "react-icons/fa";
import {
  FC,
  useContext,
  ChangeEvent,
  useEffect,
  useState,
  FormEvent,
} from "react";
import UserContext from "./context/UserContext";

const Login: FC = () => {
  const { isLoggedIn, localUser, localUserCheck } = useContext(UserContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoggedIn === false) {
      localUser({ username, password });
      document.querySelector(".login-screen")?.classList.add("hide");
    }
  };
  useEffect(() => {
    localUserCheck();
  }, [isLoggedIn]);

  return (
    <div className="login-screen  ">
      <div className="login-card ">
        <h3 className="login-text">LOGIN</h3>
        <h4 className="welcome-text">Welcome to Satuhaz's Todo App</h4>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="username-container">
            <FaUser className="user-icon" />
            <input
              type="text"
              value={username}
              className="name-input"
              placeholder="Enter username"
              onChange={(e) => {
                handleUsernameChange(e);
              }}
            />
          </div>
          <div className="password-container">
            <FaKey className="key-icon" />
            <input
              type="password"
              value={password}
              className="password-input"
              placeholder="Enter password"
              onChange={(e) => {
                handlePasswordChange(e);
              }}
            />
          </div>

          <button className="login-btn">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
