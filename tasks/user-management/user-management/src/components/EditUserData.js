import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, NavLink } from "react-bootstrap";
import classes from "./css/EditUserData.module.css";

import Wrapper from "./Helpers/Wrapper";

function EditUserData(params) {
	return (
		<Wrapper>
			<Container className={classes.myContainer}>
				<Row>
					<Col>
						<h1 className="text-start mt-4 mb-4">Edit User Data</h1>
						<Form>
							<Form.Group
								className="mt-3 mb-3"
								controlId="formFirstName"
							>
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Update First name"
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
