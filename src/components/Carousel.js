import React from "react";

class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "PokeTrade",
                    subTitle: "The Card Trading Site",
                    imgSrc: "https://github.com/VHarris113/react-portfolio2/blob/9d809bc98ae9fb6b734ebdffaa13842520ed5e8f/src/assets/poketradeio.png"
                }
            ]
        }
    }

    render() {
        return (
            <p>Hello from the Carousel</p>
        )
    }
}

export default Carousel;