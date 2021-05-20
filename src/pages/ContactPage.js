import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Hero from "../components/Hero";
import Content from "../components/Content";
import Axios from "axios";

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            disabled: "",
            emailSent: null,
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = event.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }


}

export default ContactPage;