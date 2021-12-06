import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom"
import Question from "../components/question";
import Sidebar from "../components/sidebar";
import { useGlobalContext } from "../context";

function Questions() {
  const { loginUser, setLoginUser } = useGlobalContext()
  const [questions, setQuestions] = useState([]);
  const history = useHistory()

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://myprojects-server.herokuapp.com/",
      withCredentials: true
    }).then(res => {
      if (res.data.success) {
        setLoginUser(res.data.user)
      }
      else {
        history.push("/login")
      }
    })
    axios.get("https://myprojects-server.herokuapp.com/questions/").then((res) => {
      setQuestions(res.data);
    });
  }, []);
  return (<div className="main">
    <Sidebar />
    <div className="questionList">
      <div className="questions-heading">
        <h2>All Questions</h2>
        <Link className="btn" to="/questions/ask">
          Ask Question
        </Link>
      </div>
      <hr />
      <div>
        {(questions.length > 0) &&
          questions.map((question) => {
            return <Question {...question} key={question._id} />;
          })}
      </div>
    </div>
  </div >);
}
export default Questions;
