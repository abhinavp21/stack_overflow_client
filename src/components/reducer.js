import { question_id } from "../pages/singleQuestion"
import axios from "axios";

export default function reducer(singleQuestion, action) {
    if (action.type === "INITIALIZE_QUESTION") {        /// reducer
        return action.payload
    }
    if (action.type === "INCREASE_VOTES_QUESTION") {
        let updatedSingleQuestion
        axios({
            method: "POST",
            url: `http://localhost:5000/questions/${question_id}/votes-increase`,
            withCredentials: true,
            data: { action: "increase", id: action.payload },
        }).then((res) => {
            updatedSingleQuestion = res.data
        })
        return updatedSingleQuestion
    }
    if (action.type === "DECREASE_VOTES_QUESTION") {
        let updatedSingleQuestion
        axios({
            method: "POST",
            url: `http://localhost:5000/questions/${question_id}/votes-decrease`,
            withCredentials: true,
            data: { action: "decrease", id: action.payload },
        }).then((res) => {
            updatedSingleQuestion = res.data
        })
        return updatedSingleQuestion
    }
    if (action.type === "SUBMIT_ANSWER") {
        let updatedSingleQuestion = {
            ...singleQuestion, answers: [...singleQuestion.answers, action.payload]
        }
        console.log(question_id);
        console.log(updatedSingleQuestion);
        axios
            .post(`http://localhost:5000/questions/${question_id}/add-answer`, updatedSingleQuestion)
        return updatedSingleQuestion
    }
    if (action.type === "INCREASE_VOTES_ANSWER") {
        let updatedSingleQuestion = {
            ...singleQuestion, votes: action.payload + 1,
        }
        axios
            .post(`http://localhost:5000/questions/votes-update/${question_id}`, updatedSingleQuestion)
        return
    }
    if (action.type === "DECREASE_VOTES_ANSWER") {
        return action.payload
    }
}