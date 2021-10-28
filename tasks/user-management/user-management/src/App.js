import React from "react";
import Wrapper from "./components/Helpers/Wrapper";

import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<Wrapper>
			<form>
				<label htmlFor="email">Email</label>
				<input id="email" type="email" />
				<label htmlFor="password">Password</label>
				<input id="password" type="password" />
				<Button type="submit">Login</Button>
			</form>
		</Wrapper>
	);
}

export default App;
