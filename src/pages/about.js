import React, { useEffect } from "react";
import Sidebar from "../components/sidebar";
import { useGlobalContext } from "../context";
import "../styles.css"
import axios from "axios";
import { useHistory } from "react-router";

function About() {
    const { loginUser, setLoginUser } = useGlobalContext()
    const history = useHistory()
    useEffect(() => {
        axios({
            method: "GET",
            url: "https://myproject-server.herokuapp.com/",
            withCredentials: true
        }).then(res => {
            if (res.data.success) {
                setLoginUser(res.data.user)
            }
            else {
                history.push("/login")
            }
        })
    }, [])
    return <div className="main" >
        <Sidebar />
        <div className="about">
            <h3>About Us</h3>
            <p>This site is built by Abhinav, a student of GGSIPU. Due to the pandemic, students were not able to interact much with their classmates and seniors.Due to this doubt resolution became difficult.This is a website whhere students can ask their doubts after logging in and get answers to their questions.</p>
        </div>
    </div >
}
export default About
