import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import Sidebar from "../components/sidebar";

function Home() {
  return (
    <div className="main">
      <Sidebar />
      <div className="home-container" >
        <div className="heading">
          <h3>Home</h3>
          <Link className="btn" to="/questions/ask">
            Ask Question
          </Link>
        </div>
      </div >
    </div>
  );
}
export default Home;
