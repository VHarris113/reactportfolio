import React from "react";
import Hero from "../components/Hero";
import Content from "../components";

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.children} />
            <Content>

            </Content>
        </div>
    );
}

export default AboutPage;