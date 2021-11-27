import React, { useContext, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "../styles.css";
import Sidebar from "../components/sidebar";
import axios from "axios";
import { useGlobalContext } from "../context";

function Home() {
  const { loginUser, setLoginUser } = useGlobalContext()
  const history = useHistory()
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/",
      withCredentials: true
    }).then(res => {
      if (res.data.success) {
        setLoginUser(res.data.user)
      }
      else {
        history.push("/login")
      }
    })
  }, [])
  return (<div className="main">
    <Sidebar />
    {/* <div>{loginUser.id}</div> */}
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
