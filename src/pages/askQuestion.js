import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, Redirect } from 'react-router-dom';
import "../styles.css";
import { useGlobalContext } from "../context";
import Sidebar from "../components/sidebar";

function AskQuestion() {
  const { loginUser, setLoginUser } = useGlobalContext()
  const history = useHistory()
  const [askQuestion, setAskQuestion] = useState({
    title: "",
    body: "",
    tags: "",
  });
  //
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://server-stackkkkkk.azurewebsites.net/",
      withCredentials: true
    }).then(res => {
      if (res.data.success) {
        setLoginUser(res.data.user)
      }
      else {
        history.push("/login")
      }
    })
  }, [])
  function handleSubmit(e) {
    e.preventDefault()
    let tagStr = askQuestion.tags.toLowerCase()
    const tagsArr = tagStr.split(" ")
    const newAskQuestion = {
      title: askQuestion.title,
      body: askQuestion.body,
      tags: tagsArr,
    };
    axios({
      method: "POST",
      url: "https://server-stackkkkkk.azurewebsites.net/questions/ask",
      withCredentials: true,
      data: newAskQuestion,
    }).then((res) => {
      if (res.data.success === true) {
        setAskQuestion({
          title: "",
          body: "",
          tags: "",
        });
        history.push("/questions")
        console.log("posted question");
      }
      else {
        console.log("failed");
      }
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
          <form onSubmit={handleSubmit}>
            <div className="form-element">
              <h3>Title</h3>
              {/*  */}
              <input
                name="title"
                type="text"
                onChange={handleChange}
                value={askQuestion.title}
                size="40"
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
