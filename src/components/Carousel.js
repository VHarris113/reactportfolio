import React from "react";

import Card from "../components/Card";

import poketradeio from "../assets/gif/poketrade.gif";
import ecommerce2 from "../assets/gif/ecommerce2.gif";
import dunmain from "../assets/gif/dungeonmaintence.gif";
import fitnesstracker from "../assets/gif/fitnesstracker.gif";
import howtoreadme from "../assets/gif/howtoreadme.gif";
import notetaker from "../assets/gif/notetaker.gif";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "PokeTrade",
                    subTitle: "The Card Trading Site",
                    imgSrc: poketradeio,
                    link: "https://vharris113.github.io/poketrade/",
                    repo: "https://github.com/VHarris113/poketrade",
                    selected: false
                },
                {
                    id: 1,
                    title: "Dungeon Maintenance",
                    subTitle: "A Bag of Holding for ALL Things D&D",
                    imgSrc: dunmain,
                    link: "https://tranquil-castle-20966.herokuapp.com/",
                    repo: "https://github.com/VHarris113/dungeon-maintenance",
                    selected: false
                },
                {
                    id: 2,
                    title: "E-Commerce Backend",
                    subTitle: "Keeping track of sales and inventory",
                    imgSrc: ecommerce2,
                    repo: "https://github.com/VHarris113/e-commerce-backend",
                    selected: false
                },
                {
                    id: 3,
                    title: "Fitness Tracker",
                    subTitle: "Tracking Personal Fitness",
                    imgSrc: fitnesstracker,
                    link: "https://vast-meadow-49586.herokuapp.com/",
                    repo: "https://github.com/VHarris113/fitness-tracker",
                    selected: false
                },
                {
                    id: 4,
                    title: "ReadMe Generator",
                    subTitle: "Helping Keep Coding Presentable",
                    imgSrc: howtoreadme,
                    repo: "https://github.com/VHarris113/readme-generator",
                    selected: false
                },
                {
                    id: 5,
                    title: "Note Taker",
                    subTitle: "Keeping Track of Notes",
                    imgSrc: notetaker,
                    link: "https://notetaker-ex.herokuapp.com/",
                    repo: "https://github.com/VHarris113/note-taker",
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;