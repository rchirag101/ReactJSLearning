import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Wrapper from "./components/Helpers/Wrapper";
import Navigation from "./components/Navigation";

function App() {
	return (
		<Wrapper>
			<Router>
				<Navigation />
			</Router>
		</Wrapper>
	);
}

export default App;
