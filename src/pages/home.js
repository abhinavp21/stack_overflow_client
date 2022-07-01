import React, { useContext, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "../styles.css";
import Sidebar from "../components/sidebar";
import axios from "axios";
import { useGlobalContext } from "../context";
import image from "../images/home-design.png"

function Home() {
  const { loginUser, setLoginUser } = useGlobalContext()
  const history = useHistory()
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://stack-clone.azurewebsites.net/",
      withCredentials: true
    }).then(res => {
      if (res.data.success) {
        setLoginUser(res.data.user)
        console.log(res.data, "from home useEffect");
      }
      else {
        // <Redirect to="/login" />
        console.log("inside else home useEffect");
        history.push("/login")
      }
    })
    // https://myproject-server.herokuapp.com/
  }, [])
  return (<div className="main">
    <Sidebar />
    {/* <div>{loginUser.id}</div> */}
    <div className="home-container" >
      {/* <div className="home-header">
        <h2>Home</h2>
        <Link className="btn" to="/questions/ask">
          Ask Question
        </Link>
      </div> */}
      <div className="home-body">
        <div className="div1">
          <h1>Get Answers to Questions</h1>
          {/* <h1>to Questions</h1> */}
          <h3>Search a question by tag</h3>
          <h3>Ask a question</h3>
          <h3>Answer other's questions</h3>
        </div>
        <div className="div2">
          <img className="home-img" src={image} alt="" />
        </div>
      </div>
    </div >
  </div>)
}
export default Home;
