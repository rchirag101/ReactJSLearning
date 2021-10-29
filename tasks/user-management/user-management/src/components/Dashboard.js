import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import classes from "./css/Dashboard.module.css";

import Wrapper from "./Helpers/Wrapper";
import DataTable from "react-data-table-component";

function Dashboard(props) {
	const columns = [
		{
			name: "First Name",
			selector: (row) => row.fn,
		},
		{
			name: "Last Name",
			selector: (row) => row.ln,
		},
		{
			name: "Phone Number",
			selector: (row) => row.phone,
		},
		{
			name: "Email",
			selector: (row) => row.email,
		},
		{
			name: "Password",
			selector: (row) => row.password,
		},
		{
			name: "Actions",
			selector: (row) => row.actions,
		},
	];

	const data = [
		{
			id: 1,
			fn: "Chirag",
			ln: "Ramchandanee",
			phone: "9898989898",
			email: "cr@gmail.com",
			password: "1234",
			actions: "Edit | Delete",
		},
		{
			id: 2,
			fn: "Chirag",
			ln: "Ramchandanee",
			phone: "9898989898",
			email: "cr@gmail.com",
			password: "1234",
			actions: "Edit | Delete",
		},
	];
	return (
		<Wrapper>
			<Container className={`mt-4 ${classes.myContainer}`}>
				{/* <h2>Welcome</h2>
				<ul>
					{["Alex", "John", "Jaz", "fedrik", "missali"].map(
						(user, idx) => {
							return <li key={idx}>{user}</li>;
						}
					)}
				</ul> */}

				<DataTable columns={columns} data={data}></DataTable>
			</Container>
		</Wrapper>
	);
}

export default Dashboard;
