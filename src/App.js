import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Sidebar from "./components/sidebar";
import AskQuestion from "./pages/askQuestion";
import Questions from "./pages/questions";
import SingleQuestion from "./pages/singleQuestion";
import Error from "./pages/error";
import MatchingTagQuestions from "./pages/matchingTagQuestions";
import About from "./pages/about"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
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
      </div>
    </Router>
  );
}

export default App;
