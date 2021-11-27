import React from "react";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import up from "../arrow-up.png"
import down from "../arrow-down.png"
import "../styles.css"
import reducer from "../components/reducer";
import Sidebar from "../components/sidebar";
import { useGlobalContext } from "../context";
// import NotLoggedIn from "./notLoggedIn";
import Answer from "../components/answer";

var question_id
const defaultSingleQuestion = {
  title: "",
  body: "",
  tags: [],
  answers: [],
  votes: [],
}
//
function SingleQuestion() {
  const history = useHistory()
  const { loginUser, setLoginUser } = useGlobalContext()
  let { id } = useParams();
  question_id = id
  const [answer, setAnswer] = useState("")
  const [singleQuestion, dispatch] = useReducer(reducer, defaultSingleQuestion);
  // 
  useEffect(() => {
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
    axios.get(`https://myproject-server.herokuapp.com/questions/singleQuestion/${id}`).then((res) => {
      const question = res.data
      console.log(question);
      dispatch({ type: "INITIALIZE_QUESTION", payload: question })
    });
  }, []);
  // 
  function increaseCount() {
    axios({
      method: "POST",
      url: `https://myproject-server.herokuapp.com/questions/${question_id}/votes-update`,
      withCredentials: true,
      data: { action: "increase", id: loginUser.id },
    }).then((res) => {
      console.log(res.data);
      dispatch({ type: "INCREASE_VOTES_QUESTION", payload: res.data })
    })
    // history.push(`/questions/singleQuestion/${id}`)
  }
  function decreaseCount() {
    axios({
      method: "POST",
      url: `https://myproject-server.herokuapp.com/questions/${question_id}/votes-update`,
      withCredentials: true,
      data: { action: "decrease", id: loginUser.id },
    }).then((res) => {
      console.log(res.data);
      dispatch({ type: "DECREASE_VOTES_QUESTION", payload: res.data })
    })
    // history.push(`/questions/singleQuestion/${id}`)
  }
  function increaseAnswerCount(ansid) {
    axios({
      url: `https://myproject-server.herokuapp.com/questions/${question_id}/answer-votes-update`,
      method: "POST",
      withCredentials: true,
      data: { action: "increase", ansid: ansid },
    }).then(res => {
      console.log(res.data);
      dispatch({ type: "INCREASE_VOTES_ANSWER", payload: res.data })
    })
  }
  function decreaseAnswerCount(ansid) {
    axios({
      url: `https://myproject-server.herokuapp.com/questions/${question_id}/answer-votes-update`,
      method: "POST",
      withCredentials: true,
      data: { action: "decrease", ansid: ansid },
    }).then(res => {
      console.log(res.data);
      dispatch({ type: "DECREASE_VOTES_QUESTION", payload: res.data })
    })
  }
  // 
  function handleAnswerChange(e) {
    setAnswer(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log(answer);
    let newAnswerObj = {
      aid: loginUser.id,
      votes: [],
      body: answer,
    }
    setAnswer("")
    axios({
      method: "POST",
      url: `https://myproject-server.herokuapp.com/questions/${question_id}/add-answer`,
      withCredentials: true,
      data: newAnswerObj
    }).then(res => {
      console.log(res.data);
      dispatch({ type: "SUBMIT_ANSWER", payload: res.data })
    })
  }
  return (
    singleQuestion ? <div className="main">
      < Sidebar />
      <section className="singleQuestionContainer">
        {/*  */}
        <div className="singleQuestionHead">
          <h2>{singleQuestion.title}</h2>
          <hr />
          <div className="singleQuestionBody">
            <aside>
              <button className="vote-btn" onClick={() => increaseCount()}><img src={up} alt="upvote" /></button><br />
              <span>{(singleQuestion && singleQuestion.votes.length ? singleQuestion.votes.reduce((prev, curr) => {
                return (prev.vote + curr.vote)
              }).vote : 0)}</span>
              <br /><button className="vote-btn" onClick={() => decreaseCount()}><img src={down} alt="downvote" /></button>
            </aside>
            <div className="question-content">
              <p>{singleQuestion.body}</p>
              {singleQuestion.tags.map((tag) => {
                return <span>{tag}</span>
              })}
            </div>
          </div>
        </div>
        {/*  */}
        <hr />
        <div className="answers">
          <h3>{singleQuestion.answers.length} answers</h3>
          {singleQuestion.answers.length > 0 ? (singleQuestion.answers).map(answer => {
            console.log(answer)
            return <Answer key={answer.id} answer={answer} increaseAnswerCount={increaseAnswerCount} decreaseAnswerCount={decreaseAnswerCount} />
          }) : null}
        </div>
        <hr />
        {(loginUser && (singleQuestion.user_id !== loginUser.id)) ?
          <div>
            <h4>Your Answer</h4>
            <form onSubmit={handleSubmit} name="answer_form">
              <textarea name="yourAnswer" cols="50" rows="10" value={answer} onChange={handleAnswerChange} required></textarea>
              <button className="answer-btn" type="submit">Post Your Answer</button>
            </form>
          </div>
          : null}
      </section>
    </div > : <div>no such question</div>)
};
export { question_id }
export default SingleQuestion;

