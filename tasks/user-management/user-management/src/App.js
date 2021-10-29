import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Wrapper from "./components/Helpers/Wrapper";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<Wrapper>
			<Router>
				<Navigation />
				<Switch>
					<Route path="/" exact component={() => <LoginForm />} />
					<Route
						path="/register"
						exact
						component={() => <RegistrationForm />}
					/>
				</Switch>
				<Route
					path="/dashboard"
					exact
					component={() => <Dashboard />}
				/>
			</Router>
		</Wrapper>
	);
}

export default App;
