import React, { Compontent } from "react";
import Typist from "react-typist";

import Hero from "../components/Hero";
// import Carousel from "../components/Carousel"

function HomePage(props) {
    return (
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
        </div>
    )
}

export default HomePage;