import React from "react";
import { Link } from "react-router-dom";
function Question({ title, body, tags, votes, qid, answers }) {
  return (
    <div className="question">
      <table>
        <td id="side-count">
          <h5>{votes}</h5>
          <p id="votes-p">votes</p>
          <h5>{answers.length}</h5>
          <p>answers</p>
        </td>
        <td>
          <h5>
            <Link to={`/questions/${qid}`}>{title}</Link>
          </h5>
          <p>{body}</p>
          <p>{tags}</p>
        </td>
      </table>
      <hr />
    </div>
  );
}
export default Question;
