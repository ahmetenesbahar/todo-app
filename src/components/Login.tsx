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
import ThemeContext from "./context/ThemeContext";

const Login: FC = () => {
  const { isLoggedIn, localUser, localUserCheck, hide, setHide } =
    useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const [username, setUsername] = useState<string>("");
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoggedIn === false) {
      localUser({ username });
      setHide("hide");
    }
  };

  useEffect(() => {
    localUserCheck();
  }, [isLoggedIn]);

  return (
    <>
      <div className={`login-screen ${theme} ${hide}`}>
        <div className="login-card ">
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
            <button className="login-btn ">COME IN !</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
