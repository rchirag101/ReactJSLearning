import React from "react";
import classes from "./Card.module.css";

function Card(props) {
    // when we want some cover component then pass {props.children} in it
    return (
        // props.className coming from AddUser.js
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    );
}
export default Card;
