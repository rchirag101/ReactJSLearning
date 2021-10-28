import React from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "./Button";
import Card from "./Card";
import classes from "./css/ErrorModal.module.css";

function ErrorModal(props) {
    return (
        <Wrapper>
            <div className={classes.backdrop} onClick={props.onConfirm}></div>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </Wrapper>
    );
}

export default ErrorModal;
