import React, { useRef } from "react";
import { useHistory, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, NavLink } from "react-bootstrap";

import classes from "./css/LoginForm.module.css";
import Wrapper from "./Helpers/Wrapper";
import Footer from "./Footer";

function LoginForm(props) {
	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const history = useHistory();

	function loginHandler(event) {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		var users = JSON.parse(localStorage.getItem("users"));

		const userExists = users.filter(
			(u) => u.email === enteredEmail && u.password === enteredPassword
		);

		if (userExists.length > 0) {
			resetForm();
			history.push("/dashboard");

			localStorage.setItem("isLoggedIn", "1");
			window.location.reload(false);
		} else {
			alert("Invalid credentials");
		}
	}

	function resetForm() {
		emailInputRef.current.value = "";
		passwordInputRef.current.value = "";
	}

	return (
		<Wrapper>
			<Container className={classes.myContainer}>
				<Row>
					<Col>
						<h1 className="text-center mt-3 mb-3">Login</h1>
						<Form onSubmit={loginHandler}>
							<Form.Group
								className="mt-3 mb-3"
								controlId="formBasicEmail"
							>
								<Form.Label>Email Address</Form.Label>
								<Form.Control
									required
									type="email"
									placeholder="Enter email"
									ref={emailInputRef}
								/>
							</Form.Group>
							<Form.Group
								className="mb-3"
								controlId="formBasicPassword"
							>
								<Form.Label>Password</Form.Label>
								<Form.Control
									required
									type="password"
									placeholder="Enter password"
									ref={passwordInputRef}
								/>
							</Form.Group>

							<Button type="submit" variant="primary">
								Login
							</Button>

							<NavLink
								as={Link}
								to="/register"
								className="text-end"
							>
								Don't have an account? Register
							</NavLink>
						</Form>
					</Col>
				</Row>
			</Container>
			<Footer />
		</Wrapper>
	);
}

export default LoginForm;
