import React from "react";
import logo from "../assets/img/logo192.png";

function Logo() {
    console.log(logo);
    return(
        <div className="App">
            <a href="/"><img src={logo} alt="logoimage" to="/" height={50} width={50} /></a>
        {/* Need to create this into a link to the homepage*/}
        </div>
    );
}

export default Logo;