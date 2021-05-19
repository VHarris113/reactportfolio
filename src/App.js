import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Container from "react-bootstrap/Container"
import Navbar from 'react-bootstrap/Navbar';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Veronica Harris",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About Me", path: "/about" },
        { title: "Contact Me", path: "/contact" }
      ],
      home: {
        title: "Design with Purpose",
        subTitle: "Different Projects Lorem Ipsum",
        text: "Checkout my projects below!"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Contact Me"
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom">
            <Navbar.Brand>Veronica Harris</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle"/>
          </Navbar>
        </Container>
      </Router>
    )
  }
};

export default App;
