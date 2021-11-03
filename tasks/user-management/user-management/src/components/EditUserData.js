import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import classes from "./css/EditUserData.module.css";

import Wrapper from "./Helpers/Wrapper";

function EditUserData(props) {
	const location = useLocation();
	const history = useHistory();

	const userData = location.userData; // catching specific user's data from dashboard

	const firstname = userData.firstname;
	const lastname = userData.lastname;
	const phone = userData.phone;

	function updateDataHandler(event) {
		event.preventDefault();
		console.log(userData.firstname);
		console.log(userData.lastname);
		console.log(userData.phone);
		// history.push("/dashboard");
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
