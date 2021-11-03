import React, { useState } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table, Button } from "react-bootstrap";
import classes from "./css/Dashboard.module.css";

import Wrapper from "./Helpers/Wrapper";

function Dashboard(props) {
	const [users, setUsers] = useState(
		JSON.parse(localStorage.getItem("users"))
	);

	function deleteUserHandler(id) {
		users.splice(id, 1);
		localStorage.setItem("users", JSON.stringify(users));
		setUsers([...users]);
	}

	return (
		<Wrapper>
			<Container className={`mt-4 ${classes.myContainer}`}>
				<h2 className="text-start mt-3 mb-3">Users</h2>

				<Table responsive bordered>
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Phone Number</th>
							<th>Email</th>
							<th>Password</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody className="align-middle">
						{users === null ? (
							<tr>
								<h2>No Users Found</h2>
							</tr>
						) : (
							users.map((item, i) => (
								<tr key={item.id}>
									<td>{i + 1}</td>
									<td>{item.firstname}</td>
									<td>{item.lastname}</td>
									<td>{item.phone}</td>
									<td>{item.email}</td>
									<td>{item.password}</td>
									<td>
										<Button
											variant="primary"
											as={Link}
											to="/editUserData"
											className="m-1"
										>
											Edit
										</Button>
										<Button
											variant="danger"
											className="m-1"
											onClick={() => deleteUserHandler(i)}
										>
											Delete
										</Button>
									</td>
								</tr>
							))
						)}
					</tbody>
				</Table>
			</Container>
		</Wrapper>
	);
}

export default Dashboard;
