import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Wrapper from "./components/Helpers/Wrapper";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";

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
				
			</Router>
		</Wrapper>
	);
}

export default App;
