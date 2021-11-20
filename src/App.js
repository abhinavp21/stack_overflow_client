import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
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
import { AppContext } from "./context";
import Cookies from "js-cookie";
import { ProtectedQuestions, ProtectedHome } from "./protectRoutes"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const readCookies = () => {
    const user = Cookies.get("user")
    if (user) {
      setIsLoggedIn(true)
      console.log("loggedIn");
    }
  }
  useEffect(() => {
    readCookies();
  }, [])
  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <ProtectedHome exact path="/" isLoggedIn={isLoggedIn} component={Home} />
          <Route exact path="/login" isLoggedIn={isLoggedIn} >
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <ProtectedQuestions exact path="/questions" component={Questions} />
          {/* <Route exact path="/questions">
            <Questions />
          </Route> */}
          <Route exact path="/questions/:id">
            <SingleQuestion />
          </Route>
          <Route exact path="/questions/ask">
            <AskQuestion />
          </Route>
          <Route exact path="/questions/tagged/:tag">
            <MatchingTagQuestions />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}


export default App;
