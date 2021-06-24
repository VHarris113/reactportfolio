import React from "react";
import logo from "../assets/img/logo192.png";
import "../assets/styles/logo.css";

function Logo() {
    console.log(logo);
    return(
        <div className="App">
            <a href="https://vharris113.github.io/vharris-portfolio/"><img src={logo} alt="logoimage" to="/" height={50} width={50} /></a>
        </div>
    );
}

export default Logo;