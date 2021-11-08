import React, { useContext } from "react";

import AuthContext from "./context/auth-context";

import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
	const ctx = useContext(AuthContext);

	return (
		<React.Fragment>
			<MainHeader />
			<main>
				{!ctx.isLoggedIn && <Login />}
				{ctx.isLoggedIn && <Home />}
			</main>
		</React.Fragment>
	);
}

export default App;
