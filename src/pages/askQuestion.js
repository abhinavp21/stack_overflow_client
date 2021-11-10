import React from "react";
import axios from "axios";
import { useState } from "react";
import "../app.css";

function AskQuestion() {
  const [askQuestion, setAskQuestion] = useState({
    title: "",
    body: "",
    tags: "",
  });
  //
  function handleSubmit(e) {
    e.preventDefault();
    const newAskQuestion = {
      qid: new Date().getTime(),
      title: askQuestion.title,
      body: askQuestion.body,
      tags: askQuestion.tags,
    };
    console.log(newAskQuestion);
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
              required
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
              required
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
              required
            />
          </div>
          <button type="submit">submit question</button>
        </form>
      </div>
    </div>
  );
}
export default AskQuestion;
