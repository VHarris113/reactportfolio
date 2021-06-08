import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "./components/Logo";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
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
        { title: "My Projects", path: "/myprojects" }
      ],
      home: {
        title: "Home"
      },
      about: {
        title: "About Me"
      },
      projects: {
        title: "My Projects"
      }
    }
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>

          <Navbar bg="transparent" expand="lg">
            <Logo />
            <Navbar.Toggle aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link style={{color: "white", hover: "black"}} className="nav-link" to="/">Home</Link>
                <Link style={{color: "white"}} className="nav-link" to="/about">About Me</Link>
                <Link style={{color: "white"}} className="nav-link" to="/myprojects">My Projects</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact component={() => <HomePage title={this.state.home.title} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/myprojects" render={() => <ProjectPage title={this.state.title} />} />
        
      </Router>
    )
  }
};

export default App;
