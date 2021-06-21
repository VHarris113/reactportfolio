import React from "react";
import "../assets/styles/footer.css";

const year = new Date().getFullYear();


function Footer() {
    return (
        <div className="footer">
                <p>Veronica Harris &#169; {year}</p>
        </div>
    )
};

export default Footer;