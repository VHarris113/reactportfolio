import React from "react";
import logo from "../assets/img/logo192.png";

function Logo() {
    console.log(logo);
    return(
        <div className="App">
            <img src={logo} alt="logoimage" height={50} width={50} />
        {/* Need to create this into a link to the homepage*/}
        </div>
    );
}

export default Logo;