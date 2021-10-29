import React from "react";
import { useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, NavLink } from "react-bootstrap";

import classes from "./css/LoginForm.module.css";
import Wrapper from "./Helpers/Wrapper";
import Footer from "./Footer";

function LoginForm(props) {
	const history = useHistory();

	function loginHandler(event) {
		event.preventDefault();
		history.push("/dashboard");
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

							<Button type="submit" variant="primary">
								Login
							</Button>

							{/* <Link to="/register" className="text-end">
								Don't have an account? Register
							</Link> */}
							<NavLink href="/register" className="text-end">
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
