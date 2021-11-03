import React from "react";
import axios from "axios";
import { useReducer, useState } from "react";
import "../styles.css";
import e from "express";

function AskQuestion() {
  const [askQuestion, setAskQuestion] = useState({
    title: "",
    body: "",
    tags: "",
  });
  function handleSubmit() {
    e.preventDefault();
    const newAskQuestion = {
      title: askQuestion.title,
      body: askQuestion.body,
      tags: askQuestion.tags,
    };
    axios
      .post("http://localhost:5000/questions/ask", newAskQuestion)
      .then((res) => console.log(res.data));
    setAskQuestion({
      title: "",
      body: "",
      tags: "",
    });
  }

  function handleChange(e) {
    const field = e.target.name;
    const value = e.target.value;
    console.log(askQuestion, field, value);
    setAskQuestion(() => {
      return { ...askQuestion, [field]: value };
    });
  }

  return (
    <div className="askQuestionConatiner">
      <header>
        <h2>Ask a question</h2>
      </header>
      <div className="form-container">
        <form action="" onSubmit={handleSubmit}>
          <div className="form-element">
            <h3>Title</h3>
            {/*  */}
            <input
              name="title"
              type="text"
              onChange={handleChange}
              value={askQuestion.title}
            />
          </div>
          <div className="form-element">
            <h3>Body</h3>
            {/*  */}
            <textarea
              name="body"
              id="question-body"
              cols="70"
              rows="10"
              onChange={handleChange}
              value={askQuestion.body}
            ></textarea>
          </div>
          <div className="form-element">
            <h3>Tags</h3>
            {/*  */}
            <input
              type="text"
              name="tags"
              onChange={handleChange}
              value={askQuestion.tags}
            />
          </div>
          <button type="submit">submit question</button>
        </form>
      </div>
    </div>
  );
}
export default AskQuestion;
