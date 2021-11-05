import React from "react";
import { Link } from "react-router-dom";
function Question({ title, body, tags, votes, id }) {
  return (
    <table>
      <td>
        <h5>{votes}</h5>
        <p>votes</p>
      </td>
      <td>
        <h5>
          <Link to={`questions/${id}`}>{title}</Link>
        </h5>
        <p>{body}</p>
        <p>{tags}</p>
      </td>
    </table>
  );
}
export default Question;
