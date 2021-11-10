import { Route } from "react-router";
import MainHeader from "./components/MainHeader";

import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
	return (
		<div>
			<MainHeader />
			<Route path="/welcome">
				<Welcome />
			</Route>
			<Route path="/products">
				<Products />
			</Route>
		</div>
	);
}

export default App;
