import React from "react";
import "./about.css";
import Contact from "../../components/Contact/index";
import { Container, Col, Row } from "react-bootstrap";
import Picture from "../../assets/img/profilepic.jpg";

import css from "../img/css.png";
import handlebars from "../img/handlebars.png";
import heroku from "../img/heroku.png";
import html from "../img/html.png";
import index from "../img/index.jpg";
import insomnia from "../img/insomnia.png";
import javascript from "../img/javascript.png";
import mongo from "../img/mongo.png";
import mongoose from "../img/mongoose.jpg";
import mysql from "../img/mysql.png";
import nodejs from "../img/nodejs.png";
import reactpic from "../img/react.png";
import bootstrap from "../img/bootstrap.png";
import jquery from "../img/jquery.png";
import npm from "../img/npm.png";

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
                            <h2 className="bar">Software Skill List:</h2>
                            <Row>
                                <Col>
                                    <h3>Front End Software</h3>
                                    <img className="icons" src={javascript} alt="jspic" width="75" height="75" />
                                    <img className="icons" src={html} alt="htmlpic" width="75" height="75" />
                                    <img className="icons" src={css} alt="csspic" width="75" height="75" />
                                    <img className="icons" src={handlebars} alt="mustache" width="125" height="75" />
                                    <img className="icons" src={reactpic} alt="reactpic" width="75" height="75"/>
                                    <img className="icons" src={bootstrap} alt="bootpic" width="100" height="75" />
                                    <img className="icons" src={jquery} alt="jquerypic" width="75" height="75" />
                                </Col>
                                <Col>
                                    <h3>Back End Software</h3>
                                    <img className="icons" src={heroku} alt="heroku" width="75" height="75" />
                                    <img className="icons" src={mongo} alt="mongopic" width="95" height="75" />
                                    <img className="icons" src={mongoose} alt="mongoosepic" width="125" height="75" />
                                    <img className="icons" src={index} alt="indexpic" width="75" height="65" />
                                    <img className="icons" src={mysql} alt="mysqlpic" width="75" height="75" />
                                    <img className="icons" src={insomnia} alt="insomniapic" width="75" height="75" />
                                    <img className="icons" src={nodejs} alt="nodepic" width="75" height="75" />
                                    <img className="icons" src={npm} alt="npmpic" width="75" height="75" />
                                </Col>
                            </Row>
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