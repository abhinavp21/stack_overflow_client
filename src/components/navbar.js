import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
import icon from "../search.png";
import "../styles.css";

function Navbar() {
  let history = useHistory();
  const [dropdownSearch, setDropdownSearch] = useState(false)
  const [searchTag, setSearchTag] = useState("");
  // 
  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/questions/tagged/${searchTag}`);
    setSearchTag("");
  }
  // 
  function handleDropdown() {
    setDropdownSearch(!dropdownSearch)
  }
  // 
  function handleChange(e) {
    setSearchTag(e.target.value);
  }
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="navbar-div navbar-brand">
          <a className="nav-link" href="/">Navbar Brand</a>
        </div>
        <div className="navbar-div icon-div">
          <button className="navbar-toggler" onClick={handleDropdown}>
            <span>
              <img src={icon} alt="" />
            </span>
          </button>
        </div>
        <div className="navbar-collapse navbar-div">
          <form className="search-form " onSubmit={handleSubmit}>
            <img src={icon} alt="" />
            <input
              className="search-input"
              type="search"
              placeholder="Search by tag"
              onChange={handleChange}
              value={searchTag}
            />
          </form>
        </div>
        <div className="navbar-div list-div">
          <ul type="none" className="navbar-list">
            <li >
              <a className="nav-link" href="/">Profile</a>
            </li>
            <li >
              <a className="nav-link" href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
      {dropdownSearch && <div id="dropdownSearch">
        <form className="dropdown-search-form" onSubmit={handleSubmit}>
          <img src={icon} alt="" />
          <input
            className="search-input"
            type="search"
            placeholder="Search by tag"
            onChange={handleChange}
            value={searchTag}
          />
        </form>
      </div>
      }
    </nav>
  );
}
export default Navbar;

{/* <nav className="navbar">
  <a className="navbar-brand navbar-item" href="/" navbar-brand>Navbar</a>
  {/* <Link className="navbar-brand" to="/">
        Navbar
      </Link> */}
//   <button className="navbar-toggler">
//     <span>
//       <img src={icon} alt="" />
//     </span>
//   </button>
//   <div className="navbar-collapse navbar-item">
//     <form className="search-form " onSubmit={handleSubmit}>
//       <img src={icon} alt="" />
//       <input
//         className="form-control"
//         type="search"
//         placeholder="Search by tag"
//         onChange={handleChange}
//         value={searchTag}
//       />
//     </form>
//   </div>
//   <div>
//     <ul className="navbar-nav">
//       <li className="nav-item ">
//         <a className="nav-link" href="/">Profile</a>
//       </li>
//       <li className="nav-item ">
//         <a className="nav-link" href="/about">About</a>
//       </li>
//       {/* <Link className="nav-link" to="/about">
//               About
//             </Link> */}
//     </ul>
//   </div>
// </nav> 