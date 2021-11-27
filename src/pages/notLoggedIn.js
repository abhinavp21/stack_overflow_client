import React from "react";
import { Link } from "react-router-dom"
function NotLoggedIn() {
    return (<div>
        <Link to="/login" >login</Link>
    </div>)
}
export default NotLoggedIn