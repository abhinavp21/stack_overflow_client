import React from "react";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
// import "bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";
import icon from "../search.png";
import "../styles.css";

function Navbar() {
  let history = useHistory();
  const [searchTag, setSearchTag] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/questions/tagged/${searchTag}`);
    setSearchTag("");
  }
  function handleChange(e) {
    setSearchTag(e.target.value);
  }
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
      <button className="navbar-toggler">
        <span>
          <img src={icon} alt="" />
        </span>
      </button>
      {/* <a href="s">SS</a>
      <button>d</button>
      <a href="">sss</a> */}
      <div className="navbar-collapse">
        <form className="search-form " onSubmit={handleSubmit}>
          <img src={icon} alt="" />
          <input
            className="form-control"
            type="search"
            placeholder="Search by tag"
            onChange={handleChange}
            value={searchTag}
          />
        </form>
      </div>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/">
              Profile
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
