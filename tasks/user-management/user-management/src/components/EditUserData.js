import React, { useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import classes from "./css/EditUserData.module.css";

import Wrapper from "./Helpers/Wrapper";

function EditUserData(props) {
	const firstnameInputRef = useRef();
	const lastnameInputRef = useRef();
	const phoneInputRef = useRef();

	const history = useHistory();

	const users = JSON.parse(localStorage.getItem("users"));

	const location = useLocation();
	const userId = location.userId; // catching specific user's data from dashboard

	// from DB
	const firstname = users[userId].firstname;
	const lastname = users[userId].lastname;
	const phone = users[userId].phone;

	function updateDataHandler(event) {
		event.preventDefault();

		console.log(firstname);
		console.log(lastname);
		console.log(phone);

		// current new values using useRef()
		const newFirstname = firstnameInputRef.current.value;
		const newLastname = lastnameInputRef.current.value;
		const newPhone = phoneInputRef.current.value;
		console.log(newFirstname);
		console.log(newLastname);
		console.log(newPhone);

		const newData = users.map((x) => {
			if (x.id === users[userId].id) {
				return {
					...x,
					firstname: newFirstname,
					lastname: newLastname,
					phone: newPhone,
				};
			}
			return x;
		});

		localStorage.setItem("users", JSON.stringify(newData));

		history.push("/dashboard");
	}

	return (
		<Wrapper>
			<Container className={classes.myContainer}>
				<Row>
					<Col>
						<h1 className="text-start mt-4 mb-4">Edit User Data</h1>
						<Form onSubmit={updateDataHandler}>
							<Form.Group
								className="mt-3 mb-3"
								controlId="formFirstName"
							>
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Update First name"
									defaultValue={firstname}
									ref={firstnameInputRef}
								></Form.Control>
							</Form.Group>

							<Form.Group
								className="mt-3 mb-3"
								controlId="formLastName"
							>
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Update surname"
									defaultValue={lastname}
									ref={lastnameInputRef}
								></Form.Control>
							</Form.Group>

							<Form.Group
								className="mt-3 mb-3"
								controlId="formPhone"
							>
								<Form.Label>Phone Number</Form.Label>
								<Form.Control
									type="number"
									placeholder="Update phone number"
									defaultValue={phone}
									ref={phoneInputRef}
								></Form.Control>
							</Form.Group>

							<Button type="submit" variant="primary">
								Update Data
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</Wrapper>
	);
}
export default EditUserData;
