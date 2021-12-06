import React from "react";
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
import UserQuestions from "./pages/userQuestions"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/questions">
          <Questions />
        </Route>
        <Route exact path="/questions/byuser/:id">
          <UserQuestions />
        </Route>
        <Route exact path="/questions/singleQuestion/:id">
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
  );
}


export default App;
