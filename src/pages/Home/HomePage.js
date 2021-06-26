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
                             I can do a number of things:
                            <Typist.Backspace count={28} delay={900} />
                            Web Design
                            <Typist.Backspace count={10} delay={800} />
                            Back-End Web Development
                            <Typist.Backspace count={24} delay={700} />
                            Front-End Web Development
                            <Typist.Backspace count={25} delay={500} />
                            Data Analysis
                            <Typist.Backspace count={13} delay={400} />
                            Code Refractoring
                            <Typist.Backspace count={17} delay={300} />
                            Software Development
                            <Typist.Backspace count={20} delay={200} />
                            Database Design
                            <Typist.Backspace count={15} delay={100} />
                            MERN Stack Development
                            <Typist.Backspace count={22} delay={50} />
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