import React from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import GitHub from "./images/GitHub-Mark.png"
import LinkedIn from "./images/linkedinlogo.png";
import Email from "./images/email.png";
import Resume from "./images/resume.png";

function Contact() {
    return (
        <div className="contact-box">
            <h3 className="talk">Let's Work Together:</h3>
            <Row className="w3-animate-opacity">
                <a href="https://github.com/VHarris113" rel="noreferrer" target="_blank"><img src={GitHub} alt="GitHub" width="50" height="50" /></a>
                <a href="https://www.linkedin.com/in/vharris113/" rel="noreferrer" target="_blank"><img src={LinkedIn} alt="LinkedIn" width="50" height="50" /></a>
                <a href="mailto:veronica.n.harris92@gmail.com" rel="noreferrer" target="_blank"><img src={Email} alt="Mail" width="50" height="50" /></a>
                <a href="https://docs.google.com/document/d/109uCCqPBIGngt7VXhVXX3TMFWEdwvdZSxo6TUze3WaI/export?format=pdf" rel="noreferrer" target="_blank"><img src={Resume} alt="Resume" width="50" height="50" /></a>
            </Row>
        </div>
    )
};

export default Contact;