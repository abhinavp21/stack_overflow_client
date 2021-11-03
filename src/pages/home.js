import React from "react";
import { Link } from "react-router-dom";
import "../app.css";
function Home() {
  return (
    <div className="home-container">
      <div className="heading">
        <h3>Home</h3>
        <Link className="btn" to="questions/ask">
          Ask Question
        </Link>
      </div>
    </div>
  );
}
export default Home;
