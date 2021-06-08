import React from "react";
import Typist from "react-typist";
import "react-bootstrap";
// import Background from "../assets/img/techbackground.jpg"
import "./home.css";
// import Hero from "../components/Hero";

function HomePage() {
    return (
        <div className="homediv">
            <Typist>
                    <h1>Hello!</h1>
                    <Typist.Backspace count={6} delay={1000} />
                    <h1>My name is Veronica Harris</h1>
                    <Typist.Backspace count={26} delay={2000} />
                    <h1>I'm a Back End Developer
                    <Typist.Backspace count={18} delay={1000} />
                    Front End Developer
                    <Typist.Backspace count={19} delay={500} />
                    Data Analyst
                    <Typist.Backspace count={12} delay={250} />
                    Database Specialist
                    <Typist.Backspace count={19} delay={100} />
                    <span className="glow">Full-Stack Web Developer</span></h1></Typist>

        {/* <Hero title={props.title} subTitle={props.subTitle} text={props.text}/> */}
        </div>
    )
}

export default HomePage;