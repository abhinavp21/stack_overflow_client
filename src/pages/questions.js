import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Question from "../components/question";
import Sidebar from "../components/sidebar";
import { useGlobalContext } from "../context";
import NotLoggedIn from "./notLoggedIn";

function Questions() {
  const { loginUser, setLoginUser } = useGlobalContext()
  const [questions, setQuestions] = useState([]);
  const history = useHistory()

  useEffect(() => {
    axios.get("https://myproject-server.herokuapp.com/questions/").then((res) => {
      setQuestions(res.data);
    });
    axios({
      method: "GET",
      url: "https://myproject-server.herokuapp.com/",
      withCredentials: true
    }).then(res => {
      if (res.data.success) {
        setLoginUser(res.data.user)
      }
      else {
        history.push("/login")
      }
    })
  }, []);
  return (<div className="main">
    <Sidebar />
    <div className="questionList">
      <h2>All Questions</h2>
      <hr />
      <div>
        {questions &&
          questions.map((question) => {
            return <Question {...question} key={question._id} />;
          })}
      </div>
    </div>
  </div >);
}
export default Questions;
