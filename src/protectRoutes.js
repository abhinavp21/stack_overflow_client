import React from "react"
// import { useGlobalContext } from "./context"
import { Route, Redirect } from "react-router-dom"

function ProtectedQuestions({ isLoggedIn, component: Component, ...rest }) {
    // const { loginUser } = useGlobalContext()
    return <Route
        {...rest}
        render={() => isLoggedIn ? <Component /> : <Redirect to="/login" />}
    />
}
function ProtectedHome({ isLoggedIn, component: Component, ...rest }) {
    return <Route
        {...rest}
        render={() => isLoggedIn ? <Component /> : <Redirect to="/login" />}
    />
}
export { ProtectedQuestions, ProtectedHome }