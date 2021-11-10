import { Route } from "react-router";

import MainHeader from "./components/MainHeader";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

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
			<Route path="/product-detail/:productId">
				<ProductDetail />
			</Route>
		</div>
	);
}

export default App;
