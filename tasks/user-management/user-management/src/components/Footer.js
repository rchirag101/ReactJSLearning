import React from "react";
import { Container } from "react-bootstrap";
import classes from "./css/Footer.module.css";

function Footer() {
	return (
		<footer className={`footer mt-5 py-3 bg-dark ${classes.myFooter}`}>
			<Container>
				<p className="m-0 text-center text-white">
					Made with ♥ by Chirag
				</p>
			</Container>
		</footer>
	);
}
export default Footer;
