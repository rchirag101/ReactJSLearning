import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, NavLink } from "react-bootstrap";

import classes from "./css/RegistrationForm.module.css";
import Footer from "./Footer";
import Wrapper from "./Helpers/Wrapper";

function RegistrationForm(props) {
	return (
		<Wrapper>
			<Container className={classes.myContainer}>
				<Row>
					<Col>
						<h1 className="text-center mt-3 mb-3">Register</h1>
						<Form>
							<Form.Group
								className="mt-3 mb-3"
								controlId="formFirstName"
							>
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter Your First name"
								></Form.Control>
							</Form.Group>

							<Form.Group
								className="mt-3 mb-3"
								controlId="formLastName"
							>
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter Your surname"
								></Form.Control>
							</Form.Group>

							<Form.Group
								className="mt-3 mb-3"
								controlId="formPhone"
							>
								<Form.Label>Phone Number</Form.Label>
								<Form.Control
									type="number"
									placeholder="Enter Your phone number"
								></Form.Control>
							</Form.Group>

							<Form.Group
								className="mt-3 mb-3"
								controlId="formBasicEmail"
							>
								<Form.Label>Email Address</Form.Label>
								<Form.Control
									type="email"
									placeholder="Enter email"
								></Form.Control>
							</Form.Group>
							<Form.Group
								className="mb-3"
								controlId="formBasicPassword"
							>
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Enter password"
								></Form.Control>
							</Form.Group>
							<Form.Group
								className="mb-3"
								controlId="formBasicConfirmPassword"
							>
								<Form.Label>Confirm Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Enter password again"
								></Form.Control>
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
