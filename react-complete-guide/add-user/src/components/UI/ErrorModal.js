import React from "react";
import ReactDOM from "react-dom";
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
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onConfirm={props.onConfirm}
				/>,
				document.getElementById("overlay-root")
			)}
		</React.Fragment>
	);
}

export default ErrorModal;
