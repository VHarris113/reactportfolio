import React from "react";
// import Contact from "../Contact";
import Container from "react-bootstrap/Container";
import Typist from "react-typist";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./home.css";

function HomePage() {
    return (
        <div>
            <Container classname="container">
                <Row className="justify-content-center">
                    <Col>
                        <Typist cursor={{ show: false }}>
                            <h1 className="header">Hello!
                            <Typist.Backspace count={6} delay={1000} />
                            My name is Veronica Harris
                            <Typist.Backspace count={27} delay={3000} />
                            Nice to meet you! :D
                            <Typist.Backspace count={2} delay={500} />
                            ;D
                            <Typist.Backspace count={20} delay={1000} />
                            <span classname="header">I am a Full Stack Web Developer</span></h1>
                        </Typist>
                    </Col>
                </Row>
            </Container>
            {/* <Contact /> */}
        </div>
    )
}

export default HomePage;