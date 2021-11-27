import React, { useState, useContext } from "react"
import "./login.css"
import axios from "axios"
import { useHistory, Redirect } from "react-router-dom"
import Cookies from "js-cookie"
import { useGlobalContext } from "../../context"

function Login() {
    const { loginUser, setLoginUser } = useGlobalContext()
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
            url: "https://myproject-server.herokuapp.com/login",
            withCredentials: true,
            data: user
        })
            .then(res => {
                if (res.data.success === true) {
                    history.push("/")
                }
                else {
                    alert("incorrect username or password")
                    history.push("/login")
                }
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