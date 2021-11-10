import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Question from "../components/question";
function Questions() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/questions").then((res) => {
      setQuestions(res.data);
    });
    // return () => {
    //     cleanup
    // }
  }, []);
  return (
    <div className="questionList">
      <h2>All Questions</h2>
      <hr />
      <div>
        {questions &&
          questions.map((question) => {
            return <Question {...question} key={question.qid} />;
          })}
      </div>
    </div>
  );
}
export default Questions;
