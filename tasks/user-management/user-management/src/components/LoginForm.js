import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	Container,
	Row,
	Col,
	Form,
	Button,
	NavLink,
} from "react-bootstrap";

function LoginForm(props) {
	return (
		<Container>
			<Row>
				<Col>
					<Form>
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

						<NavLink href="/register">
							Don't have an account? Register
						</NavLink>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default LoginForm;
