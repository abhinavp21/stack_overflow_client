import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Sidebar from "./components/sidebar";
// import AskQuestion from "./components/AskQuestion";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="body">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/questions/ask">
            <AskQuestion />
          </Route> */}
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/questions">
            <QuestionsList />
          </Route>
          <Route path="/questions/:id">
            <SingleQuestion />
          </Route>
          <Route path="*">
            <Error />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
