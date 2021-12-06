import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../context";
// import { Link } from "react-router-dom";
import icon from "../images/search.png"
import "../styles.css";
import brand from "../images/brand.jpeg"

function Navbar() {
  let history = useHistory();
  const [dropdownSearch, setDropdownSearch] = useState(false)
  const [searchTag, setSearchTag] = useState("");
  const { loginUser, setLoginUser } = useGlobalContext()
  // 
  function handleSubmit(e) {
    e.preventDefault();
    let tag = searchTag.toLowerCase()
    history.push(`/questions/tagged/${tag}`);
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
  function handleLogout() {
    axios({
      method: "POST",
      url: "https://myprojects-server.herokuapp.com/logout",
      withCredentials: true,
    }).then(res => {
      if (res.data.success === true) {
        setLoginUser({})
        console.log("logging out")
        history.push("/login")
      }
      else
        alert("logout failed")
    })
  }
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="navbar-div navbar-brand">
          <a className="nav-link" href="/">
            <img id="navbar-logo" src={brand} alt="navbar-brand" />
            <span>Companion</span>
          </a>
        </div>
        <div className="navbar-div icon-div">
          <button className="navbar-toggler" onClick={handleDropdown}>
            <span>
              <img src={icon} alt="" />
            </span>
          </button>
        </div>
        <div className="navbar-div navbar-collapse">
          <form className="search-form " onSubmit={handleSubmit}>
            <img src={icon} alt="" />
            <input
              className="search-input"
              type="search"
              size="18"
              placeholder="Search by tag"
              onChange={handleChange}
              value={searchTag}
            />
          </form>
        </div>
        <div className="navbar-div list-div">
          <ul type="none" className="navbar-list">
            {(loginUser && loginUser.id) ?
              <li>
                <button className="logout-btn" onClick={() => handleLogout()}>logout</button>
              </li> : null}
            <li >
              <a className="nav-link" href="/questions">questions</a>
            </li>
            <li >
              <a className="nav-link" href="/questions/ask">ask</a>
            </li>
            <li >
              <a className="nav-link" href="/about">about</a>
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