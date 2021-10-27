import React from "react";
import classes from "./Card.module.css";

function Card(props) {
    // when we want some cover component then pass {props.children} in it
    return <div className={classes.card}>{props.children}</div>;
}
export default Card;
