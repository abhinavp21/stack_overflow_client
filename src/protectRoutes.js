import React, { useEffect, useState } from "react"
import { useGlobalContext } from "./context"
import { Route, Redirect } from "react-router-dom"
// import Cookies from "js-cookie";

function ProtectedQuestions({ component: Component, ...rest }) {
    const { loginUser } = useGlobalContext()
    return <Route
        {...rest}
        render={() => loginUser ? <Component /> : <Redirect to="/login" />}
    />
}
function ProtectedHome({ component: Component, ...rest }) {
    const { loginUser } = useGlobalContext()
    // const readCookies = () => {
    //     const user = Cookies.get("user")
    //     if (user) {
    //         setIsLoggedIn(true)
    //         console.log("loggedIn");
    //     }
    // }
    // useEffect(() => {
    //     axios({
    //         method: "GET",
    //         url: "http://localhost:5000/",
    //         withCredentials: true
    //     })
    // }, [])
    // useEffect(() => {
    //     console.log(isLoggedIn);
    //     readCookies();
    // }, [])
    return <Route
        {...rest}
        render={() => loginUser ? <Component /> : <Redirect to="/login" />}
    />
}
export { ProtectedQuestions, ProtectedHome }