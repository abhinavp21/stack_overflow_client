import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Question from "../components/question";
import Sidebar from "../components/sidebar";
import { useGlobalContext } from "../context";

function MatchingTagQuestions() {
    const { loginUser, setLoginUser } = useGlobalContext()
    const history = useHistory()
    let { tag } = useParams()
    const [tagQuestions, setTagQuestions] = useState([]);

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
        axios({
            method: "GET",
            url: `https://server-stackkkkkk.azurewebsites.net/questions/tagged/${tag}`,
            withCredentials: true
        }).then((res) => {
            setTagQuestions(res.data);
        })
    }, []);
    return (
        <div className="main">
            <Sidebar />
            {tagQuestions ? <div className="questionList">
                <h2>All Questions Tagged {tag}</h2>
                <hr />
                <div>
                    {tagQuestions &&
                        tagQuestions.map((taggedQuestion) => {
                            return <Question {...taggedQuestion} key={taggedQuestion._id} />;
                        })}
                </div>
            </div> : <h2 style={{ textAlign: "center" }}>No matching Questions</h2>
            }
        </div >
    );
}
export default MatchingTagQuestions;
