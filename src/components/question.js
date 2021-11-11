import React from "react";
import { Link } from "react-router-dom";
function Question({ title, body, tags, votes, qid, answers }) {
  return (
    <div>
      <div className="question">
        <div id="side-count">
          <h5>{votes}</h5>
          <p id="votes-p">votes</p>
          <h5>{answers.length}</h5>
          <p>answers</p>
        </div>
        <div className="question-content">
          <h5>
            <Link to={`/questions/${qid}`}>{title}</Link>
          </h5>
          <p>{body}</p>
          <div>
            {tags.map((tag) => {
              return <span>{tag}</span>
            })}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default Question;
