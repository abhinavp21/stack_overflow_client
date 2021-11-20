import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Question from "../components/question";

function MatchingTagQuestions() {
    let { tag } = useParams()
    const [tagQuestions, setTagQuestions] = useState([]);
    useEffect(() => {
        console.log(tag);
        axios.get(`http://localhost:5000/questions/tagged/${tag}`).then((res) => {
            setTagQuestions(res.data);
        });
        // return () => {
        //     cleanup
        // }
    }, []);
    return (
        <div>
            {
                tagQuestions ? <h2 style={{ textAlign: "center" }}>No matching Questions</h2> : <div className="questionList">
                    <h2>All Tagged Questions</h2>
                    <hr />
                    <div>
                        {tagQuestions &&
                            tagQuestions.map((taggedQuestion) => {
                                return <Question {...taggedQuestion} key={taggedQuestion._id} />;
                            })}
                    </div>
                </div>
            }
        </div >
    );
}
export default MatchingTagQuestions;
