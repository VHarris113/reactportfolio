import React from "react";
import "./projects.css";
import Contact from "../../components/Contact/index";
// import Carousel from "../../components/Carousel";
import { Container, Col, Row, Button } from "react-bootstrap"
import poketrade from "../../assets/gif/poketrade.gif";
import dunmain from "../../assets/gif/dungeonmaintence.gif";
import ecommerce from "../../assets/gif/ecommerce2.gif";
import fitness from "../../assets/gif/fitnesstracker.gif";
import readme from "../../assets/gif/howtoreadme.gif";
import notes from "../../assets/gif/notetaker.gif";

import css from "./img/css.png";
import handlebars from "./img/handlebars.png";
import heroku from "./img/heroku.png";
import html from "./img/html.png";
import index from "./img/index.jpg";
import insomnia from "./img/insomnia.png";
import javascript from "./img/javascript.png";
import mongo from "./img/mongo.png";
import mongoose from "./img/mongoose.jpg";
import mysql from "./img/mysql.png";
import nodejs from "./img/nodejs.png";
import reactpic from "./img/react.png";

function ProjectPage() {
    return (
        <div className="project">
            <Container className="projectcon">
                <Row>
                <Col>
                <h1 className="importantheaders">My Projects</h1>
                <br />
                <p className="summaryheader">Please take a look at the project samples below of some of my work. I made sure to add what technologies I've used and am familiar with. I will also include the technologies used for this website below this description. I can't wait to work with you. See my contact information below!</p>
                <div className="divstuff">
                    <Contact />
                </div>
                </Col>
                </Row>
            </Container>
            <hr />
            <Row className="project1">
                <Col className="colboi">
                <h1>PokéTrade.io</h1>
                <img className="projpic" src={poketrade} alt="poketrade" />
                </Col>
                <Col className="colboi">
                <h2>Project Summary:</h2>
                <p className="summary">In a world of Pokemon, only a select few are able to claim the title of Pokemon Master. As card games go, this is one of the top tier best of the best in the world. Finding a possible solution to assisting traders (users) of all ages, backgrounds, and creeds is our mission. With PokeTrade.io, we offer a safe and knowledgeable avenue that will allow the trader to search for, keep record of, and determine valuation of their own Pokemon cards.</p>
                <h3>Technologies Used:</h3>
                <p className="pics">
                <img src={javascript} alt="jspic" className="noback" width="100" height="100" />
                <img src={html} alt="htmlpic" className="noback" width="100" height="100" />
                <img src={css} alt="csspic" className="noback" width="100" height="100" />
                </p>
                    <Button variant="outline-dark">
                        <a href="https://vharris113.github.io/poketrade/" target="_blank" rel="noreferrer" className="webrep">Website</a>
                    </Button>
                    <Button variant="outline-dark">
                        <a href="https://github.com/VHarris113/poketrade" target="_blank" rel="noreferrer" className="webrep">Repository</a>
                    </Button>
                </Col>
            </Row>
            <hr />
            <Row className="project2">
                <Col className="colboi">
                <h2>Project Summary:</h2>
                <p className="summary">This website offers a convenient and simple place to store all character data as well as campaign information (coming soon) to the fabulous world of Dungeons and Dragons. Inside this website, you will be able to login in and store your data for the most recent and past campaign characters at the click of a button.</p>
                <h3>Technologies Used:</h3>
                <p className="pics">
                <img src={javascript} alt="jspic" className="noback" width="100" height="100" />
                <img src={html} alt="htmlpic" className="noback" width="100" height="100" />
                <img src={css} alt="csspic" className="noback" width="100" height="100" />
                <img src={handlebars} alt="mustache" className="noback" width="175" height="100" />
                <img src={heroku} alt="heroku" width="100" height="100" />
                </p>
                    <Button variant="outline-dark">
                        <a href="https://tranquil-castle-20966.herokuapp.com/" target="_blank" rel="noreferrer" className="webrep">Website</a>
                    </Button>
                    <Button variant="outline-dark">
                        <a href="https://github.com/VHarris113/dungeon-maintenance" target="_blank" rel="noreferrer" className="webrep">Repository</a>
                    </Button>
                </Col>
                <Col className="colboi">
                <h1>Dungeon Maintenance</h1>
                <img src={dunmain} className="projpic" alt="dunmain" />
                </Col>
            </Row>
            <hr />
            <Row className="project3">
                <Col className="colboi">
                <h1>E-Commerce Backend</h1>
                <img src={ecommerce} className="projpic" alt="ecomm" />
                </Col>
                <Col className="colboi">
                <h2>Project Summary:</h2>
                <p className="summary">A helpful web development tool that keeps track of incoming and current store stock. This is a great and easy tool for any business owner, new and veteran. It allows you to create new product categories, tags to organize product, and new product items within your shop/business.</p>
                <h3>Technologies Used:</h3>
                <p className="pics">
                <img src={javascript} alt="jspic" className="noback" width="100" height="100" />
                <img src={mysql} alt="mysqlpic" className="noback" width="100" height="100" />
                <img src={insomnia} alt="insomniapic" width="100" height="100" />
                <img src={nodejs} alt="nodepic" className="noback" width="100" height="100" />
                </p>
                    <Button variant="outline-dark">
                        <a href="https://github.com/VHarris113/e-commerce-backend" target="_blank" rel="noreferrer" className="webrep">Repository</a>
                    </Button>
                </Col>
            </Row>
            <hr />
            <Row className="project4">
                <Col className="colboi">
                <h2>Project Summary:</h2>
                <p className="summary">This is an easy application to log your workout routines on a daily basis. With the Fitness Tracker application, you are able to create workouts, edit existing workouts, and keep track of what's completed. This handy tool utilizes MongoDB, Mongoose, JavaScript, and IndexDB to allow for the data to persist.</p>
                <h3>Technologies Used:</h3>
                <p className="pics">
                <img src={javascript} alt="jspic" className="noback" width="100" height="100" />
                <img src={html} alt="htmlpic" className="noback" width="100" height="100" />
                <img src={mongo} alt="mongopic" width="120" height="100" />
                <img src={mongoose} alt="mongoosepic" width="175" height="100" />
                <img src={index} alt="indexpic" width="130" height="120" />
                <img src={heroku} alt="heroku" width="100" height="100" />
                </p>
                    <Button variant="outline-dark">
                        <a href="https://vast-meadow-49586.herokuapp.com/" target="_blank" rel="noreferrer" className="webrep">Website</a>
                    </Button>
                    <Button variant="outline-dark">
                        <a href="https://github.com/VHarris113/fitness-tracker" target="_blank" rel="noreferrer" className="webrep">Repository</a>
                    </Button>
                </Col>
                <Col className="colboi">
                <h1>Fitness Tracker</h1>
                <img src={fitness} className="projpic" alt="fittrack" />
                </Col>
            </Row>
            <hr />
            <Row className="project5">
                <Col className="colboi">
                <h1>Readme Generator</h1>
                <img src={readme} className="projpic" alt="readme" /></Col>
                <Col className="colboi">
                <h2>Project Summary:</h2>
                <p className="summary">The ReadMe Generator generates a fully completed ReadMe for any user. This will allow for ease of creation and lessen time consuming practices of making a ReadMe after a large project is nearing completion.</p>
                <h3>Technologies Used:</h3>
                <p className="pics">
                <img src={javascript} alt="jspic" className="noback" width="100" height="100" />
                <img src={html} alt="htmlpic" className="noback" width="100" height="100" />
                </p>
                    <Button variant="outline-dark">
                        <a href="https://github.com/VHarris113/readme-generator" target="_blank" rel="noreferrer" className="webrep">Repository</a>
                    </Button>
                </Col>
            </Row>
            <hr />
            <Row className="project6">
                <Col className="colboi">
                <h2>Project Summary:</h2>
                <p className="summary">This is a very useful app to help take notes and keep track of appropriate work or personal related details. This is my first use of express in the back-end field.</p>
                <h3>Technologies Used:</h3>
                <p className="pics">
                <img src={javascript} alt="jspic" className="noback" width="100" height="100" />
                <img src={html} alt="htmlpic" className="noback" width="100" height="100" />
                <img src={css} alt="csspic" className="noback" width="100" height="100" />
                <img src={heroku} alt="heroku" width="100" height="100" />
                </p>
                    <Button variant="outline-dark">
                        <a href="https://notetaker-ex.herokuapp.com/" target="_blank" rel="noreferrer" className="webrep">Website</a>
                    </Button>
                    <Button variant="outline-dark">
                        <a href="https://github.com/VHarris113/note-taker" target="_blank" rel="noreferrer" className="webrep">Repository</a>
                    </Button>
                </Col>
                <Col className="colboi">
                <h1>Note Taker</h1>
                <img src={notes} className="projpic" alt="note" /></Col>
            </Row>
            <hr />
           <div className="importantheaders">
                <h3 className="second">Technologies Used for This Website:</h3>
                    <img src={javascript} alt="jspic" className="noback" width="100" height="100" />
                    <img src={html} alt="htmlpic" className="noback" width="100" height="100" />
                    <img src={css} alt="csspic" className="noback" width="100" height="100" />
                    <img src={reactpic} alt="reactpic" width="100" height="100"/>
           </div>
        </div>
    )
}

export default ProjectPage;