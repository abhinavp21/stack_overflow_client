import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <hr />
      <div className="sidebar-link">
        <Link clasName="sidebar-link-item" to="/">home</Link>
      </div>
      <div className="sidebar-link">
        <Link clasName="sidebar-link-item" to="/questions">questions</Link>
      </div>
    </div>
  );
}

export default Sidebar;
