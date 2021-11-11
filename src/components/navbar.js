import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
// import "bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";
import icon from "../search.png";
import "../styles.css";

function Navbar() {
  let history = useHistory();
  const [searchTag, setSearchTag] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    history.push(`/questions/tagged/${searchTag}`)
    setSearchTag("")
  }
  function handleChange(e) {
    setSearchTag(e.target.value)
  }
  return (
    <nav className="navbar navbar-light navbar-expand-sm">
      <div className="container-fluid position-relative">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <img src={icon} alt="" />
          </span>
        </button>
        {/*expand*/}
        <div
          className="collapse navbar-collapse position-relative me-auto"
          id="navbarSupportedContent"
        >
          <form className="search-form mx-auto w-50" onSubmit={handleSubmit}>
            <img src={icon} alt="" />
            <input
              className="form-control"
              type="search"
              placeholder="Search by tag"
              aria-label="Search"
              onChange={handleChange}
              value={searchTag}
            />
          </form>
          <ul className="navbar-nav ms-auto">
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
      </div>
    </nav>
  );
}
export default Navbar;
