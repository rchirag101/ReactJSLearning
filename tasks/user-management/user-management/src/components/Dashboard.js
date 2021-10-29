import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table, Button } from "react-bootstrap";
import classes from "./css/Dashboard.module.css";

import Wrapper from "./Helpers/Wrapper";

function Dashboard(props) {
	const users = [
		{
			id: 1,
			fn: "Chirag",
			ln: "Ramchandanee",
			phone: "9898989898",
			email: "cr@gmail.com",
			password: "1234",
		},
		{
			id: 2,
			fn: "Pavan",
			ln: "Ramchandanee",
			phone: "7878787878",
			email: "pr@gmail.com",
			password: "asdf ",
		},
	];

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
						{users.map((item) => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.fn}</td>
								<td>{item.ln}</td>
								<td>{item.phone}</td>
								<td>{item.email}</td>
								<td>{item.password}</td>
								<td>
									<Button
										variant="primary"
										href="/editUserData"
										className="m-1"
									>
										Edit
									</Button>
									<Button
										variant="danger"
										href="/"
										className="m-1"
									>
										Delete
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		</Wrapper>
	);
}

export default Dashboard;
