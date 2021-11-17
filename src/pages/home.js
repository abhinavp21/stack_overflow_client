import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import Sidebar from "../components/sidebar";
import axios from "axios";
import { useGlobalContext } from "../context";

function Home() {
  const { loginUser, handleLogin } = useGlobalContext()
  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/"
    })
      .then((res) => {
        console.log(res.data);
        handleLogin(res.data)
      })
  }, [])
  if (loginUser && loginUser.username)
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
