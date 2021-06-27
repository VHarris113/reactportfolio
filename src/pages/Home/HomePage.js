import React from "react";
import Contact from "../../components/Contact/index";
import Container from "react-bootstrap/Container";
import Typist from "react-typist";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./home.css";

function HomePage() {
    return (
        <div className="homediv">
            <Container className="container">
                <Row className="row">
                    <Col className="col">
                        <Typist className="myTypist" cursor={{ show: false }}>
                            <h1 className="header">Hello!
                            <Typist.Backspace count={6} delay={200} />
                            My name is Veronica Harris
                            <Typist.Backspace count={27} delay={1000} />
                            What can I help you with?
                            <Typist.Backspace count={25} delay={900} />
                            Web Design
                            <Typist.Backspace count={10} delay={600} />
                            Back-End Web Development
                            <Typist.Backspace count={24} delay={400} />
                            Front-End Web Development
                            <Typist.Backspace count={25} delay={200} />
                            Data Analysis
                            <Typist.Backspace count={13} delay={100} />
                            Code Refractoring
                            <Typist.Backspace count={17} delay={50} />
                            Software Development
                            <Typist.Backspace count={20} delay={50} />
                            Database Design
                            <Typist.Backspace count={15} delay={50} />
                            MERN Stack Development
                            <Typist.Backspace count={22} delay={25} />
                            <span className="title">I am a Full Stack Web Developer</span></h1>
                        </Typist>
                        <br className="break" />
                        <div className="hcon">
                            <Contact />
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage;