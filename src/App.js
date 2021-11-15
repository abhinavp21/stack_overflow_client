import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login/login";
import AskQuestion from "./pages/askQuestion";
import Questions from "./pages/questions";
import SingleQuestion from "./pages/singleQuestion";
import Error from "./pages/error";
import MatchingTagQuestions from "./pages/matchingTagQuestions";
import About from "./pages/about"
import Register from "./pages/register/register"
import axios from "axios";

function App() {
  // const [loginUser, setLoginUser] = useState({})
  // useEffect(() => {
  //   axios.get("http://localhost:5000/").then((res) => {
  //     if (res.data.success === true) {
  //       alert("success")
  //       setLoginUser(res.data.user)
  //     }
  //   })
  //   // return () => {
  //   // }
  // }, [])
  // loginUser && loginUser._id ?
  // function handleLogin(user) {
  //   setLoginUser(user)
  // }
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
          {/* {handleLogin = { handleLogin }} */}
          {/* {<Home /> : <Register />} */}
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/questions/ask">
          <AskQuestion />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/questions">
          <Questions />
        </Route>
        <Route exact path="/questions/:id">
          <SingleQuestion />
        </Route>
        <Route exact path="/questions/tagged/:tag">
          <MatchingTagQuestions />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
