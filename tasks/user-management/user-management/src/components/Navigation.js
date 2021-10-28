import React from "react";
import { Link, withRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation(props) {
	return (
		<div className="navigation">
			<Navbar bg="dark" variant="dark">
				<Container>
					<Link className="navbar-brand" to="/">
						User Management
					</Link>
					<Nav className="ml-auto">
						<Nav.Link href="/">Login</Nav.Link>
						<Nav.Link href="/register">Register</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
}

export default withRouter(Navigation);
