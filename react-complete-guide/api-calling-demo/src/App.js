import React from "react";
import "./css/App.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users: null,
		};
	}

	componentDidMount() {
		fetch("https://reqres.in/api/users").then((response) => {
			response.json().then((result) => {
				console.log(result.data);
				this.setState({ users: result.data });
			});
		});
	}

	render() {
		return (
			<div className="App">
				<h1>API Calling Demo</h1>
				<center>
					<table>
						<thead>
							<tr>
								<th>#</th>
								<th>Avatar</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Email</th>
							</tr>
						</thead>
						<tbody>
							{this.state.users
								? this.state.users.map((item, i) => {
										return (
											<tr key={i}>
												<td>{i}</td>
												<td>
													<img
														src={item.avatar}
														alt="Avatar"
														height="75px"
														width="75px"
													/>
												</td>
												<td>{item.first_name}</td>
												<td>{item.last_name}</td>
												<td>{item.email}</td>
											</tr>
										);
								  })
								: null}
						</tbody>
					</table>
				</center>
			</div>
		);
	}
}

export default App;
