import React, { useState, useContext } from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Cookies from "js-cookie"
// import { AppContext } from "../../context"

function Login({ isLoggedIn, setIsLoggedIn }) {
    const history = useHistory()
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        axios({
            method: "POST",
            url: "http://localhost:5000/login",
            withCredentials: true,
            data: user
        })
            .then(res => {
                console.log(res.data.user);
                if (res.data.success === true) {
                    setIsLoggedIn(true)
                    Cookies.set("user", "loginTrue")
                    history.push("/")
                }
                else
                    history.push("/login")
            })
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <input type="email" name="username" value={user.username} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password"></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
    )
}

export default Login