import React, { useState } from "react";
import { useHistory, Link, withRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation(props) {
	const history = useHistory();

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const logoutHandler = () => {
		localStorage.removeItem("isLoggedIn"); // storing data in localStorage of browser
		setIsLoggedIn(false);
		history.push("/");
		window.location.reload(false);
	};

	return (
		<div className="navigation">
			<Navbar bg="dark" variant="dark">
				<Container>
					{props.isLoggedIn ? (
						<Link className="navbar-brand" to="/dashboard">
							User Management
						</Link>
					) : (
						<Link className="navbar-brand" to="/">
							User Management
						</Link>
					)}

					<Nav className="ml-auto">
						{!props.isLoggedIn && (
							<Nav.Link as={Link} to="/">
								Login
							</Nav.Link>
						)}
						{!props.isLoggedIn && (
							<Nav.Link as={Link} to="/register">
								Register
							</Nav.Link>
						)}
						{props.isLoggedIn && (
							<Nav.Link as={Link} to="/" onClick={logoutHandler}>
								Logout
							</Nav.Link>
						)}
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
}

export default withRouter(Navigation);
