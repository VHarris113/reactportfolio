import React from "react";
import logo from "../assets/img/logo192.png";

function Logo() {
    console.log(logo);
    return(
        <div className="App">
            <img src={logo} alt="logoimage" height={100} width={200} />
        </div>
    );
}

export default Logo;