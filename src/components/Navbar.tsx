import React, { useContext, useEffect, useState } from "react";

import {
  FaBars,
  FaHome,
  FaPlus,
  FaBell,
  FaSearch,
  FaSun,
  FaMoon,
} from "react-icons/fa";

import ThemeContext from "./context/ThemeContext";
import TodoContext from "./context/TodoContext";

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { searchTask } = useContext(TodoContext);
  const [search, setSearch] = useState("");

  const searchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    searchTask(search);
  }, [search]);

  return (
    <div className={`navbar ${theme}`}>
      <div className="left">
        {/* <FaBars className="menu icon" />
        <FaHome className="home icon" /> */}
        <form className="search-form">
          <input
            type="text"
            className="search"
            value={search}
            onChange={searchOnChange}
          />
          <FaSearch className="search-icon icon" />
        </form>
      </div>
      <div className="right">
        {/* <FaPlus className="add-task icon" /> */}
        {/* <FaBell className="icon notifications" /> */}
        {theme === "light" ? (
          <FaMoon className="moon-icon icon " onClick={toggleTheme} />
        ) : (
          <FaSun className="sun-icon icon " onClick={toggleTheme} />
        )}

        <div className="user-icon"></div>
      </div>
    </div>
  );
};

export default Navbar;
