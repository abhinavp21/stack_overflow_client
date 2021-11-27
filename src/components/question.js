import React from "react";
import { Link } from "react-router-dom";
function Question({ _id, title, body, tags, votes, answers }) {
  return (
    <div>
      <div className="question">
        <aside id="side-count">
          <h4>{votes.length > 0 ? votes.reduce((prev, curr) => {
            return (prev.vote + curr.vote)
          }).vote : 0}</h4>
          <p id="votes-p">votes</p>
          <h4>{answers.length}</h4>
          <p>answers</p>
        </aside>
        <div className="question-content">
          <h2>
            <Link to={`/questions/singleQuestion/${_id}`}>{title}</Link>
          </h2>
          <p>{body.length < 200 ? body : body.substr(0, 200) + "..."}</p>
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
