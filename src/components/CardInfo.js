import React from "react";
import "../../src/assets/styles/cardinfo.css";

function CardInfo(props) {

    return (
        <div className="infocard">
        <a href={props.repo} target="_blank" rel="noopener noreferrer">{props.title}</a>
        <br />
        {props.subTitle}
        <br />
        {/* <a href={props.link} target="_blank" rel="noopener noreferrer">Website</a> */}
        </div>
    )
}

export default CardInfo;