import React from "react";
import up from "../arrow-up.png"
import down from "../arrow-down.png"

function Answer({ answer, increaseAnswerCount, decreaseAnswerCount }) {
    console.log(answer);
    return <div className="singleQuestionBody">
        <aside>
            <button className="vote-btn" onClick={() => increaseAnswerCount(answer.aid)}><img src={up} alt="upvote" /></button><br />
            <span>{(answer.votes && answer.votes.length > 0) ? answer.votes.reduce((prev, curr) => {
                return (prev.vote + curr.vote)
            }).vote : 0}</span>
            <br /><button className="vote-btn" onClick={() => decreaseAnswerCount(answer.aid)}><img src={down} alt="downvote" /></button>
        </aside>
        <div>{answer.body}</div>
    </div>
}

export default Answer