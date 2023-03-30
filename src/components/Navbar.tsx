import React from "react";
import { FaBars, FaHome, FaPlus, FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <FaBars className="menu icon" />
        <FaHome className="home icon" />
        <form className="search-form">
          <input type="text" className="search" />
        </form>
      </div>
      <div className="right">
        <FaPlus className="add-task icon" />
        <FaBell className="icon notifications" />
      </div>
    </div>
  );
};

export default Navbar;
