import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Wrapper from "./components/Helpers/Wrapper";
import LoginForm from "./components/LoginForm";
import Navigation from "./components/Navigation";

function App() {
	return (
		<Wrapper>
			<Router>
				<Navigation />
				<Switch>
					<Route path="/" exact component={() => <LoginForm />} />
				</Switch>
			</Router>
		</Wrapper>
	);
}

export default App;
