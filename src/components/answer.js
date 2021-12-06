import React from "react";
import up from "../images/arrow-up.png"
import down from "../images/arrow-down.png"
import "../styles.css"
import { useGlobalContext } from "../context";

function Answer({ answer, increaseAnswerCount, decreaseAnswerCount }) {
    const { loginUser, setLoginUser } = useGlobalContext()
    console.log(answer);
    return <div className="singleQuestionBody">
        <aside>
            <button className="vote-btn" onClick={() => increaseAnswerCount(answer.aid)}><img src={up} alt="upvote" style={answer.votes.some(obj => { return (obj.uid === loginUser.id && obj.vote === 1) }) ? { borderColor: "#b85428", borderStyle: "solid" } : null} /></button><br />
            <span>
                {
                    (answer.votes.length > 0) ? answer.votes.reduce((acc, obj) => {
                        return acc + obj.vote
                    }, 0) : 0
                }
            </span>
            <br /><button className="vote-btn" onClick={() => decreaseAnswerCount(answer.aid)}><img src={down} alt="downvote" style={answer.votes.some(obj => { return (obj.uid === loginUser.id && obj.vote === -1) }) ? { borderColor: "#b85428", borderStyle: "solid" } : null} /></button>
        </aside>
        <div>
            {answer.body}
            <h4>answered by <span>{answer.usname}</span></h4>
        </div>
    </div>
}

export default Answer