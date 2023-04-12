import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";

import { FaUser } from "react-icons/fa";

import { useTheme } from "@context/ThemeContext";
import { useUserContext } from "@context/UserContext";

const Login: FC = () => {
  const { isLoggedIn, localUser, localUserCheck, hide, setHide } =
    useUserContext();
  const { theme } = useTheme();

  const [username, setUsername] = useState<string>("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLoggedIn) {
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
