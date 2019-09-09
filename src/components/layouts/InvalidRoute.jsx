import React from "react";
import leo_logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import "./Layouts.css";

const InvalidRoute = (props) => {
    return (
        <div className="invalid-route">
            <img src={leo_logo} alt="Logo of LEO Club"/>
            <h1>404! Invalid Route! Bzztt...</h1>
            <span>Looks like you are lost.</span>
            <button data-type='dark'><Link to="/" style={{color: "white", textDecoration: "none"}}>Go back home!</Link></button>
        </div>
    )
};

export default InvalidRoute;