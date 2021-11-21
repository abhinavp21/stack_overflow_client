import React, { useEffect, useState } from "react"
// import { useGlobalContext } from "./context"
import { Route, Redirect } from "react-router-dom"
import Cookies from "js-cookie";

function ProtectedQuestions({ isLoggedIn, component: Component, ...rest }) {
    // const { loginUser } = useGlobalContext()
    return <Route
        {...rest}
        render={() => isLoggedIn ? <Component /> : <Redirect to="/login" />}
    />
}
function ProtectedHome({ isLoggedIn, setIsLoggedIn, component: Component, ...rest }) {
    const readCookies = () => {
        const user = Cookies.get("user")
        if (user) {
            setIsLoggedIn(true)
            console.log("loggedIn");
        }
    }
    useEffect(() => {
        console.log(isLoggedIn);
        readCookies();
    }, [])
    return <Route
        {...rest}
        render={() => isLoggedIn ? <Component /> : <Redirect to="/login" />}
    />
}
export { ProtectedQuestions, ProtectedHome }