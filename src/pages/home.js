import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import Sidebar from "../components/sidebar";
import axios from "axios";
import { AppContext } from "../context";

function Home() {
  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: "http://localhost:5000/",
  //     withCredentials: true
  //   })
  // }, [])
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
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
}
export default Home;
