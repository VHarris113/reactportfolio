import React from "react";
import logo from "../assets/img/logo192.png";

function Logo() {
    console.log(logo);
    return(
        <div className="App">
            <img src={logo} alt="logoimage" to="https://vharris113.github.io/vharris-portfolio2/#/" height={50} width={50} />
        </div>
    );
}

export default Logo;