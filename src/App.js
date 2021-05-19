import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

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

      </Router>
    )
  }
};

export default App;
