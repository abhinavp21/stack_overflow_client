import React from "react";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import up from "../images/arrow-up.png"
import down from "../images/arrow-down.png"
import "../styles.css"
import reducer from "../components/reducer";
import Sidebar from "../components/sidebar";
import { useGlobalContext } from "../context";
// import NotLoggedIn from "./notLoggedIn";
import Answer from "../components/answer";

// var question_id
const defaultSingleQuestion = {
  user_id: "",
  user_name: "",
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
  const [answer, setAnswer] = useState("")
  const [singleQuestion, dispatch] = useReducer(reducer, defaultSingleQuestion);
  // 
  useEffect(() => {
    // question_id = id
    console.log(id);
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
    axios({
      method: "GET",
      url: `https://myprojects-server.herokuapp.com/questions/singleQuestion/${id}`,
      withCredentials: true
    }).then((res) => {
      const question = res.data
      console.log(question);
      dispatch({ type: "INITIALIZE_QUESTION", payload: question })
    });
  }, []);
  // 
  function increaseCount() {
    if (loginUser.id !== singleQuestion.user_id)
      axios({
        method: "POST",
        url: `https://myprojects-server.herokuapp.com/questions/votes-update/${id}`,
        withCredentials: true,
        data: { action: "increase", userid: loginUser.id },
      }).then((res) => {
        console.log(res.data);
        if (res.data.success)
          dispatch({ type: "INCREASE_VOTES_QUESTION", payload: res.data.message })
      })
    // history.push(`/questions/singleQuestion/${id}`)
  }
  function decreaseCount() {
    if (loginUser.id !== singleQuestion.user_id)
      axios({
        method: "POST",
        url: `https://myprojects-server.herokuapp.com/questions/votes-update/${id}`,
        withCredentials: true,
        data: { action: "decrease", userid: loginUser.id },
      }).then((res) => {
        console.log(res.data);
        if (res.data.success)
          dispatch({ type: "DECREASE_VOTES_QUESTION", payload: res.data.message })
      })
    // history.push(`/questions/singleQuestion/${id}`)
  }
  function increaseAnswerCount(ansid) {
    if (loginUser.id !== ansid)
      axios({
        url: `https://myprojects-server.herokuapp.com/questions/answer-votes-update/${id}`,
        method: "POST",
        withCredentials: true,
        data: { action: "increase", ansid: ansid },
      }).then(res => {
        console.log(res.data);
        dispatch({ type: "INCREASE_VOTES_ANSWER", payload: res.data })
      })
  }
  function decreaseAnswerCount(ansid) {
    if (loginUser.id !== ansid)
      axios({
        url: `https://myprojects-server.herokuapp.com/questions/answer-votes-update/${id}`,
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
      username: loginUser.name,
      body: answer,
      votes: [],
    }
    setAnswer("")
    axios({
      method: "POST",
      url: `https://myprojects-server.herokuapp.com/questions/add-answer/${id}`,
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
              <button className="vote-btn" onClick={() => increaseCount()}><img src={up} alt="upvote" style={singleQuestion.votes.some(obj => { return (obj.uid === loginUser.id && obj.vote === 1) }) ? { borderColor: "#b85428", borderStyle: "solid" } : null} /></button><br />
              <span>
                {
                  (singleQuestion.votes.length > 0) ?
                    singleQuestion.votes.reduce((acc, obj) => {
                      return acc + obj.vote
                    }, 0) : 0
                }
              </span>
              <br /><button className="vote-btn" onClick={() => decreaseCount()}><img src={down} alt="downvote" style={singleQuestion.votes.some(obj => { return (obj.uid === loginUser.id && obj.vote === -1) }) ? { borderColor: "#b85428", borderStyle: "solid" } : null} /></button>
            </aside>
            <div className="question-content">
              <p>{singleQuestion.body}</p>
              <div className="tags">
                {singleQuestion.tags && singleQuestion.tags.map((tag) => {
                  return <span>
                    <a href={`/questions/tagged/${tag}`}>{tag}</a>
                  </span>
                })}
              </div>
              {
                (loginUser && singleQuestion) ? <h4>asked by <span>{singleQuestion.user_name}</span></h4> : null
              }
            </div>
          </div>
        </div>
        {/*  */}
        <hr />
        <div className="answers">
          <h3>{singleQuestion.answers.length} answers</h3>
          {singleQuestion.answers.length > 0 ? (singleQuestion.answers).map(answer => {
            return <Answer key={answer._id} answer={answer} increaseAnswerCount={increaseAnswerCount} decreaseAnswerCount={decreaseAnswerCount} />
          }) : null}
        </div>
        <hr />
        {
          (loginUser && (singleQuestion.user_id !== loginUser.id) && !(singleQuestion.answers.some((answer) => { return (answer.aid === loginUser.id) }))) ?
            <div>
              <h4>Your Answer</h4>
              <form onSubmit={handleSubmit} name="answer_form">
                <textarea name="yourAnswer" cols="50" rows="10" value={answer} onChange={handleAnswerChange} required></textarea>
                <button className="answer-btn" type="submit">Post Your Answer</button>
              </form>
            </div>
            : null
        }
      </section>
    </div > : <div>no such question</div>)
};
// export { question_id }
export default SingleQuestion;

