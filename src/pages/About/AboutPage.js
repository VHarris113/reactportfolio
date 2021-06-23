import React from "react";
import "./about.css";
import Contact from "../../components/Contact/index";
import { Container, Col, Row, ProgressBar } from "react-bootstrap";
import Picture from "../../assets/img/profilepic.jpg";

function AboutPage() {
    return (
        <Container>
            <div className="aboutDiv">
                <h1 className="aboutMe">About Me</h1>
                   <Row>
                   <Col>
                   <p className="profile"><img src={Picture} className="profilepic" alt="profilepic" width="300"/>Hi! My name is Veronica and I'm a developer. I specialize in a lot of unique skills that would be suitable for what you're looking for. I live in the Northern Atlanta area and am ready to be the newest member of your team. I was able to provide a charge detailing a lot of my skills below. My different skills cultivated throughout my three month journey into web development and the software field in general. I learned a lot of interesting things in the time at boot camp. I am ready to also expand my knowledge. Please take a look, and note that link to my GitHub and LinkedIn are available as well as links to my professional email and a posting of my resume. Please let me know if you have any questions or concerns. Thank you so much for your time!</p>
                   </Col>
                   <Col>
                        <div>
                            <h2 className="bar">Coding Progress Bar</h2>
                            <ProgressBar striped variant="info" animated now={99} label={`HTML 99%`} />
                            <br />
                            <ProgressBar striped variant="info" animated now={100} label={`CSS 100%`} />
                            <br />
                            <ProgressBar striped variant="info" animated now={80} label={`JavaScript 80%`} />
                            <br />
                            <ProgressBar striped variant="info" animated now={75} label={`React 75%`} />
                            <br />
                            <ProgressBar striped variant="info" animated now={90} label={`MySQL 90%`} />
                            <br />
                            <ProgressBar striped variant="info" animated now={85} label={`MongoDB 85%`} />
                            <br />
                            <ProgressBar striped variant="success" animated now={100} label={`Still Learning 100%`} />
                        </div>
                   </Col>
                    </Row>
                    <Row>
                        <Contact />
                    </Row>
            </div>
        </Container>
    );
}

export default AboutPage;