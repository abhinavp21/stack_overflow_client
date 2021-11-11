import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
function Home() {
  return (
    <div className="home-container">
      <div className="heading">
        <h3>Home</h3>
        <Link className="btn" to="/questions/ask">
          Ask Question
        </Link>
      </div>
      {/* <div>Icons made by <a href="https://www.flaticon.com/authors/alfredo-hernandez" title="Alfredo Hernandez">Alfredo Hernandez</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </div>
  );
}
export default Home;
