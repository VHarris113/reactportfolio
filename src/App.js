import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "./components/Logo";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ProjectPage from "./pages/Projects/ProjectPage";
import Footer from "./components/Footer";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Veronica Harris",
      path: "https://vharris113.github.io/vharris-portfolio",
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
      <div>
        <div>
      <Router basename={process.env.PUBLIC_URL}>

          <Navbar className="color">
            <Logo />
            <Navbar.Toggle aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <a href="/" className="link" >Home</a>
                <br />
                <a href="/about" className="link">About Me</a>
                <br />
                <a href="/myprojects" className="link">My Projects</a>
                {/* <Link style={{ color: "white"}} className="nav-link" to="/">Home</Link>
                <Link style={{ color: "white"}} className="nav-link" to="/about">About Me</Link>
                <Link style={{ color: "white"}} className="nav-link" to="/myprojects">My Projects</Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact component={() => <HomePage title={this.state.home.title} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/myprojects" render={() => <ProjectPage title={this.state.title} />} />
      </Router>
      </div>
      <Footer />
      </div>
    )
  }
};

export default App;
