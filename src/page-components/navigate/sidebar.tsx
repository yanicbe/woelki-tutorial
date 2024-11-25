import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="w-full border"></div>
    </div>
  );
};

export default Sidebar;
