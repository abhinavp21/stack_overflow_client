import { question_id } from "../pages/singleQuestion"
import axios from "axios";

export default function reducer(singleQuestion, action) {
    if (action.type === "INITIALIZE_QUESTION") {        /// reducer
        return action.payload
    }
    if (action.type === "INCREASE_VOTES_QUESTION") {
        return action.payload
    }
    if (action.type === "DECREASE_VOTES_QUESTION") {
        return action.payload
    }
    if (action.type === "SUBMIT_ANSWER") {
        return action.payload
    }
    if (action.type === "INCREASE_VOTES_ANSWER") {
        return action.payload
    }
    if (action.type === "DECREASE_VOTES_ANSWER") {
        return action.payload
    }
}
