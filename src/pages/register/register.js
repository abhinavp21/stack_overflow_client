import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { useGlobalContext } from "../../context"

const Register = () => {
    // const { loginUser, handleLogin } = useGlobalContext()
    const history = useHistory()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password } = user
        if (name && email && password) {
            axios({
                method: "POST",
                url: "https://myprojects-server.herokuapp.com/register",
                withCredentials: true,
                data: user
            })
                .then(res => {
                    alert(res.data.message)
                    const response = res.data.success
                    if (response === true) {
                        // handleLogin(true)
                        history.push("/")
                    }
                    else if (response === "already")
                        history.push("/login")
                    else {
                        history.push("/register")
                    }
                })
        } else {
            alert("invlid input")
        }

    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
            <input type="email" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
            {/* <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input> */}
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Register