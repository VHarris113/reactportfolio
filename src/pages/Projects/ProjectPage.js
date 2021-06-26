import React from "react";
import "./projects.css";
// import Carousel from "../../components/Carousel";
import { Container, Col, Row} from "react-bootstrap"
import poketrade from "../../assets/gif/poketrade.gif";
import dunmain from "../../assets/gif/dungeonmaintence.gif";
import ecommerce from "../../assets/gif/ecommerce2.gif";
import fitness from "../../assets/gif/fitnesstracker.gif";
import readme from "../../assets/gif/howtoreadme.gif";
import notes from "../../assets/gif/notetaker.gif";

function ProjectPage() {
    return (
        <div className="project">
            <Container>
            <h1>My Projects</h1>
            </Container>
            <Row className="project1">
                <Col>
                <h1>PokéTrade.io</h1>
                <img src={poketrade} alt="poketrade" />
                </Col>
                <Col>Information</Col>
            </Row>
            <hr />
            <Row className="project2">
                <Col>Information</Col>
                <Col>
                <h1>Dungeon Maintenance</h1>
                <img src={dunmain} alt="dunmain" />
                </Col>
            </Row>
            <hr />
            <Row className="project3">
                <Col>
                <h1>E-Commerce Backend</h1>
                <img src={ecommerce} alt="ecomm" />
                </Col>
                <Col>Information</Col>
            </Row>
            <hr />
            <Row className="project4">
                <Col>Information</Col>
                <Col>
                <h1>Fitness Tracker</h1>
                <img src={fitness} alt="fittrack" />
                </Col>
            </Row>
            <hr />
            <Row className="project5">
                <Col>
                <h1>Readme Generator</h1>
                <img src={readme} alt="readme" /></Col>
                <Col>Information</Col>
            </Row>
            <hr />
            <Row className="project6">
                <Col>Information</Col>
                <Col>
                <h1>Note Taker</h1>
                <img src={notes} alt="note" /></Col>
            </Row>
        </div>
    )
}

export default ProjectPage;