import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Question from "./question";
function QuestionList() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/questions").then((res) => {
      console.log(res.data);
      setQuestions(res.data);
    });
    // return () => {
    //     cleanup
    // }
  }, []);
  return (
    <div>
      <div>
        <h2>All Questions</h2>
      </div>
      {questions &&
        questions.map((question) => {
          return <Question {...question} key={question.id} />;
        })}
    </div>
  );
}
export default QuestionList;
