import React, { useEffect } from "react";
import Sidebar from "../components/sidebar";
import { useGlobalContext } from "../context";
import "../styles.css"
import axios from "axios";
import { useHistory } from "react-router";
import "../styles.css"

function About() {
    const { loginUser, setLoginUser } = useGlobalContext()
    const history = useHistory()
    useEffect(() => {
        axios({
            method: "GET",
            url: "https://stack-clone.azurewebsites.net/",
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
            <h2>About Us</h2>
            <p>This is a stack-overflow clone named Companion. It was built by Abhinav, a student of GGSIPU as a project.</p>
        </div>
    </div >
}
export default About
