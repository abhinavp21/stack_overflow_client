import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useGlobalContext } from "../context";
import "../styles.css";
import axios from "axios"

function Sidebar() {
  const history = useHistory()
  const { loginUser, setLoginUser } = useGlobalContext()

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://stack-clone.azurewebsites.net/",
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

  return (
    <div className="sidebar">
      <hr />
      <div className="sidebar-link" id="firstLink">
        <Link className="sidebar-link-item" to="/">home</Link>
      </div>
      <div className="sidebar-link">
        <Link className="sidebar-link-item" to="/questions">all questions</Link>
      </div>
      <div className="sidebar-link" id="firstLink">
        {loginUser ? <Link className="sidebar-link-item" to={`/questions/byuser/${loginUser.id}`}>your questions</Link> : null}
      </div>
    </div >
  );
}

export default Sidebar;
