import React, { useEffect, useState } from "react";

import { FaMoon, FaSearch, FaSun } from "react-icons/fa";

import { useTheme } from "@context/ThemeContext";
import { useTodo } from "@context/TodoContext";

const Navbar = () => {
  const { toggleTheme, theme } = useTheme();
  const { searchTask } = useTodo();

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
            placeholder="Search"
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
      </div>
    </div>
  );
};

export default Navbar;
