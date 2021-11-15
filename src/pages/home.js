import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import Sidebar from "../components/sidebar";
import axios from "axios";
import { useGlobalContext } from "../context";

function Home() {
  const { loginUser, handleLogin } = useGlobalContext()
  useEffect(() => {
    axios.get("http://localhost:5000/").then((res) => {
      if (res.data.success === true) {
        alert("success")
        handleLogin(true)
      }
      else {
        alert("failure")
        // handleLogin(false)
      }
    })
    // return () => {
    // }
  }, [])
  if (loginUser)
    return (<div className="main">
      <Sidebar />
      <div className="home-container" >
        <div className="heading">
          <h3>Home</h3>
          <Link className="btn" to="/questions/ask">
            Ask Question
          </Link>
        </div>
      </div >
    </div>)

  return (<div>
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
  </div>)
}
export default Home;
