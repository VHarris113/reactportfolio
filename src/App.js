import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Veronica Harris",
      path: "https://vharris113.github.io",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About Me", path: "/about" },
        { title: "Contact Me", path: "/contact" },
        { title: "My Projects", path: "/myprojects" }
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
      },
      projects: {
        title: "My Projects"
      }
    }
  }

  render() {
    return (
      <Router basename="/">
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Logo />
            <Navbar.Toggle aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About Me</Link>
                <Link className="nav-link" to="/contact">Contact Me</Link>
                <Link className="nav-link" to="/myprojects">My Projects</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact component={() => <HomePage title={this.state.home.title} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/myprojects" render={() => <ProjectPage title={this.state.contact.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer />
        </Container>
      </Router>
    )
  }
};

export default App;
