import React from "react";
import { Link } from "react-router-dom";
import "../app.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-link">
        <Link to="/">home</Link>
      </div>
      <div className="sidebar-link">
        <Link to="/questions">questions</Link>
      </div>
    </div>
  );
}

export default Sidebar;
