import React from "react";
// import Hero from "../components/Hero";
import Content from "../components/Content";
// import Links from "../components/Links";
import { BrowserRouter as Link } from "react-router-dom";


function AboutPage(props) {
    return (
        <div>
            {/* <Hero title={props.title} /> */}
            <Content>
                <h1>About Me</h1>
            <p>Hi! My name is Veronica and I'm a developer. I specialize in a lot of unique skills that would be suitable for what you're looking for. I live in the Northern Atlanta area and am ready to be the newest member of your team. Above are the links where you can contact me and even witness some of my work and specialties below.</p>

            <p>My different skills cultivated throughout my three month journey into web development and the software field in general. I learned a lot of interesting things in the time at boot camp. I am ready to also expand my knowledge. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates alias nihil, accusantium cumque maxime est numquam iste repellat? Sit, similique.</p>

            <Link>
            <a href="https://docs.google.com/document/d/109uCCqPBIGngt7VXhVXX3TMFWEdwvdZSxo6TUze3WaI/export?format=pdf" target="_blank" rel="noopener noreferrer">My Resume</a>
            <br/>
            <a href="https://www.linkedin.com/in/vharris113/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <br/>
            <a href="https://github.com/VHarris113" target="_blank" rel="noopener noreferrer">GitHub</a>
            </Link>

            </Content>
        </div>
    );
}

export default AboutPage;