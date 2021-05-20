import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Veronica Harris",
      // path: "/vharris-portfolio2",
      headerLinks: [
        { title: "Home", path: "/vharris-portfolio2" },
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

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Veronica Harris Logo</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/vharris-portfolio2">Home</Link>
                <Link className="nav-link" to="/about">About Me</Link>
                <Link className="nav-link" to="/contact">Contact Me</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/vharris-portfolio2" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer />
        </Container>
      </Router>
    )
  }
};

export default App;
