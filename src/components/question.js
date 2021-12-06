import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function Question({ _id, title, body, tags, votes, answers }) {
  // useEffect(() => {
  //   console.log(votes);
  // }, [])
  return (
    <div>
      <div className="question">
        <aside id="side-count">
          <h4>{
            (votes.reduce((acc, obj) => {
              return acc + obj.vote
            }, 0))
          }</h4>
          <p id="votes-p">votes</p>
          <h4>{answers.length}</h4>
          <p>answers</p>
        </aside>
        <div className="question-content">
          <h2>
            <Link to={`/questions/singleQuestion/${_id}`}>{title.length < 200 ? title : title.substr(0, 200) + "..."}</Link>
          </h2>
          <p>{body.length < 200 ? body : body.substr(0, 200) + "..."}</p>
          <div className="tags">
            {tags && tags.map((tag) => {
              return <span>
                <a href={`/questions/tagged/${tag}`}>{tag}</a>
              </span>
            })}
          </div>
        </div>
      </div>
      <hr />
    </div >
  );
}
export default Question;
