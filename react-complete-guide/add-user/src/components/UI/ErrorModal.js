import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./css/ErrorModal.module.css";

function Backdrop(props) {
	return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
}
function ModalOverlay(props) {
	return (
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
	);
}

function ErrorModal(props) {
	return <React.Fragment></React.Fragment>;
}

export default ErrorModal;
