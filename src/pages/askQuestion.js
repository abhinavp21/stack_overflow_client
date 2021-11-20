import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import "../styles.css";
// import { useGlobalContext } from "../context";
import Sidebar from "../components/sidebar";

function AskQuestion() {
  // const { loginUser } = useGlobalContext()
  const [askQuestion, setAskQuestion] = useState({
    title: "",
    body: "",
    tags: "",
  });
  //
  useEffect(() => {
    // console.log(loginUser);
  }, [])
  function handleSubmit(e) {
    e.preventDefault();
    let tagStr = askQuestion.tags
    const tagsArr = tagStr.split(" ")
    const newAskQuestion = {
      title: askQuestion.title,
      body: askQuestion.body,
      tags: tagsArr,
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
      <div className="main">
        <Sidebar />
        <div className="form-container">
          <h2>Ask a question</h2>
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
    </div>
  );
}
export default AskQuestion;
