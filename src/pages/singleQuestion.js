import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../app.css";
import up from "../arrow-up.png"
import down from "../arrow-down.png"

function SingleQuestion() {
  let { id } = useParams();
  const [singleQuestion, setSingleQuestion] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:5000/questions/${id}`).then((res) => {
      setSingleQuestion(res.data);
    });
  }, []);
  function increaseCount() {
    let updatedSingleQuestion = {
      ...singleQuestion, votes: singleQuestion.votes + 1,
    }
    axios
      .post(`http://localhost:5000/questions/votes-update/${id}`, updatedSingleQuestion)
    setSingleQuestion(updatedSingleQuestion)
  }
  function decreaseCount() {
    let updatedSingleQuestion = {
      ...singleQuestion, votes: singleQuestion.votes - 1,
    }
    axios
      .post(`http://localhost:5000/questions/votes-update/${id}`, updatedSingleQuestion)
    setSingleQuestion(updatedSingleQuestion)
  }
  function increaseAnswerCount() {
    let updatedSingleQuestion = {
      ...singleQuestion, votes: singleQuestion.votes + 1,
    }
    axios
      .post(`http://localhost:5000/questions/votes-update/${id}`, updatedSingleQuestion)
    setSingleQuestion(updatedSingleQuestion)
  }
  function decreaseAnswerCount() {
    let updatedSingleQuestion = {
      ...singleQuestion, votes: singleQuestion.votes - 1,
    }
    axios
      .post(`http://localhost:5000/questions/votes-update/${id}`, updatedSingleQuestion)
    setSingleQuestion(updatedSingleQuestion)
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
            <div>{singleQuestion.body}</div>
          </div>
        </div>
        {/*  */}
        <div className="answers">
          {singleQuestion.answers && <h3>{singleQuestion.answers.length} answers</h3>}
          {singleQuestion.answers && singleQuestion.answers.map((answer) => {
            return <div className="singleQuestionBody">
              <aside>
                <button className="vote-btn" onClick={() => increaseAnswerCount()}><img src={up} alt="upvote" /></button><br />
                <span>{answer.votes}</span>
                <br /><button className="vote-btn" onClick={() => decreaseAnswerCount()}><img src={down} alt="downvote" /></button>
              </aside>
              <div>{answer.body}</div>
            </div>
          })}
        </div>
      </section>
    )
  );
}
export default SingleQuestion;

{
  /* <section className="singleQuestion">
      <h2>{singleQuestion.title}</h2>
      <hr />
      <div>
        <aside>{singleQuestion.votes}</aside>
        <div>{singleQuestion.body}</div>
      </div>
    </section> */
}
