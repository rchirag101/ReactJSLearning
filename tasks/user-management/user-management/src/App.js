import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Wrapper from "./components/Helpers/Wrapper";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Dashboard from "./components/Dashboard";
import EditUserData from "./components/EditUserData";

function App() {
	const isLoggedIn = localStorage.getItem("isLoggedIn");

	const [isLoggedInState, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

		if (storedUserLoggedInInfo === "1") {
			setIsLoggedIn(true);
		}
	}, []);

	return (
		<Wrapper>
			<Router>
				<Navigation isLoggedIn={isLoggedIn} />
				<Switch>
					<Route path="/" exact component={() => <LoginForm />} />
					<Route
						path="/register"
						exact
						component={() => <RegistrationForm />}
					/>
					{isLoggedInState ? (
						<Route
							path="/dashboard"
							component={() => <Dashboard />}
						/>
					) : (
						<Route to="/" exact component={() => <LoginForm />} />
					)}

					<Route
						path="/editUserData"
						exact
						component={() => <EditUserData />}
					/>
				</Switch>
			</Router>
		</Wrapper>
	);
}

export default App;
