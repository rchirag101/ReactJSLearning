import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, NavLink } from "react-bootstrap";

import classes from "./css/RegistrationForm.module.css";
import Footer from "./Footer";
import Wrapper from "./Helpers/Wrapper";

function RegistrationForm(props) {
	const [enteredFirstname, setEnteredFirstname] = useState("");
	const [enteredLastname, setEnteredLastname] = useState("");
	const [enteredPhone, setEnteredPhone] = useState("");
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredPassword, setEnteredPassword] = useState("");
	const [enteredConfirmedPassword, setEnteredConfirmedPassword] =
		useState("");

	var users = JSON.parse(localStorage.getItem("users"));

	const history = useHistory();

	function firstnameChangeHandler(event) {
		setEnteredFirstname(event.target.value);
	}

	function lastnameChangeHandler(event) {
		setEnteredLastname(event.target.value);
	}

	function phoneChangeHandler(event) {
		setEnteredPhone(event.target.value);
	}
	function emailChangeHandler(event) {
		setEnteredEmail(event.target.value);
	}

	function passwordChangeHandler(event) {
		setEnteredPassword(event.target.value);
	}

	function confirmPasswordChangeHandler(event) {
		setEnteredConfirmedPassword(event.target.value);
	}

	function registrationHandler(event) {
		event.preventDefault();

		let usersCount;

		if (users === null) {
			users = [];
			usersCount = 0;
		} else {
			usersCount = users.length;
		}

		console.log(usersCount);

		const user = {
			id: usersCount + 1,
			firstname: enteredFirstname,
			lastname: enteredLastname,
			phone: enteredPhone,
			email: enteredEmail,
			password: enteredPassword,
		};

		if (enteredPassword === enteredConfirmedPassword) {
			users = [...users, user];
			localStorage.setItem("users", JSON.stringify(users));
			resetForm();
			alert("Registration Successful");
			history.push("/");
		} else {
			console.log("Password Mismatch");
		}
	}

	function resetForm() {
		setEnteredFirstname("");
		setEnteredLastname("");
		setEnteredPhone("");
		setEnteredEmail("");
		setEnteredPassword("");
		setEnteredConfirmedPassword("");
	}

	return (
		<Wrapper>
			<Container className={classes.myContainer}>
				<Row>
					<Col>
						<h1 className="text-center mt-3 mb-3">Register</h1>
						<Form onSubmit={registrationHandler}>
							<Form.Group
								className="mt-3 mb-3"
								controlId="formFirstName"
							>
								<Form.Label>First Name</Form.Label>
								<Form.Control
									required
									type="text"
									placeholder="Enter Your First name"
									value={enteredFirstname}
									onChange={firstnameChangeHandler}
								/>
							</Form.Group>

							<Form.Group
								className="mt-3 mb-3"
								controlId="formLastName"
							>
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									required
									type="text"
									placeholder="Enter Your surname"
									value={enteredLastname}
									onChange={lastnameChangeHandler}
								/>
							</Form.Group>

							<Form.Group
								className="mt-3 mb-3"
								controlId="formPhone"
							>
								<Form.Label>Phone Number</Form.Label>
								<Form.Control
									required
									type="number"
									placeholder="Enter Your phone number"
									value={enteredPhone}
									onChange={phoneChangeHandler}
								/>
							</Form.Group>

							<Form.Group
								className="mt-3 mb-3"
								controlId="formBasicEmail"
							>
								<Form.Label>Email Address</Form.Label>
								<Form.Control
									required
									type="email"
									placeholder="Enter email"
									value={enteredEmail}
									onChange={emailChangeHandler}
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
									value={enteredPassword}
									onChange={passwordChangeHandler}
								/>
							</Form.Group>
							<Form.Group
								className="mb-3"
								controlId="formBasicConfirmPassword"
							>
								<Form.Label>Confirm Password</Form.Label>
								<Form.Control
									required
									type="password"
									placeholder="Enter password again"
									value={enteredConfirmedPassword}
									onChange={confirmPasswordChangeHandler}
								/>
							</Form.Group>

							<Button type="submit" variant="primary">
								Register
							</Button>

							<NavLink href="/" className="text-end">
								Already have an account? Log In
							</NavLink>
						</Form>
					</Col>
				</Row>
			</Container>
			<Footer />
		</Wrapper>
	);
}

export default RegistrationForm;
