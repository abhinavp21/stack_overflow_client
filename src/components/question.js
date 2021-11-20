import React from "react";
import { Link } from "react-router-dom";
function Question({ _id, title, body, tags, votes, answers }) {
  return (
    <div>
      <div className="question">
        <aside id="side-count">
          <h5>{votes.length}</h5>
          <p id="votes-p">votes</p>
          <h5>{answers.length}</h5>
          <p>answers</p>
        </aside>
        <div className="question-content">
          <h2>
            <Link to={`/questions/${_id}`}>{title}</Link>
          </h2>
          <p>{body}</p>
          <div>
            {tags &&
              tags.map((tag) => {
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
