import React from "react";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import up from "../arrow-up.png"
import down from "../arrow-down.png"
import "../styles.css"
import reducer from "../components/reducer";

var question_id
const defaultSingleQuestion = {
  qid: "",
  title: "",
  body: "",
  tags: [],
  answers: [{ ansid: "", votes: 0, body: "" }],
  votes: "",
}
//
function SingleQuestion() {
  let { id } = useParams();
  question_id = id
  const [answer, setAnswer] = useState("")
  const [singleQuestion, dispatch] = useReducer(reducer, defaultSingleQuestion);
  // 
  useEffect(() => {
    axios.get(`http://localhost:5000/questions/${id}`).then((res) => {
      const question = res.data
      dispatch({ type: "INITIALIZE_QUESTION", payload: question })
    });
  }, []);
  // 
  function increaseCount() {
    dispatch({ type: "INCREASE_VOTES_QUESTION", payload: singleQuestion.votes })
  }
  function decreaseCount() {
    dispatch({ type: "DECREASE_VOTES_QUESTION", payload: singleQuestion.votes })
  }
  // 
  function handleAnswerChange(e) {
    setAnswer(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log(answer);
    let newAnswerObj = {
      ansid: new Date().getTime(),
      body: answer,
      votes: 0,
    }
    setAnswer("")
    dispatch({ type: "SUBMIT_ANSWER", payload: newAnswerObj })
  }
  return (
    singleQuestion && (
      <section className="singleQuestionContainer">
        {/*  */}
        <div className="singleQuestionHead">
          <h2>{singleQuestion.title}</h2>
          <hr />
          <div className="singleQuestionBody">
            <aside>
              <button className="vote-btn" onClick={() => increaseCount()}><img src={up} alt="upvote" /></button><br />
              <span>{singleQuestion.votes}</span>
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
          {singleQuestion.answers && <h3>{singleQuestion.answers.length} answers</h3>}
          {singleQuestion.answers && singleQuestion.answers.map((answer) => {
            return <div className="singleQuestionBody">
              {/* <aside>
                <button className="vote-btn" onClick={() => increaseAnswerCount()}><img src={up} alt="upvote" /></button><br />
                <span>{answer.votes}</span>
                <br /><button className="vote-btn" onClick={() => decreaseAnswerCount()}><img src={down} alt="downvote" /></button>
              </aside> */}
              <div>{answer.body}</div>
            </div>
          })}
        </div>
        <hr />
        <div>
          <h5>Your Answer</h5>
          <form onSubmit={handleSubmit} name="answer_form">
            <textarea name="yourAnswer" cols="50" rows="10" value={answer} onChange={handleAnswerChange} required></textarea>
            <button className="answer-btn" type="submit">Post Your Answer</button>
          </form>
        </div>
      </section>
    )
  );
}
export { question_id }
export default SingleQuestion;

