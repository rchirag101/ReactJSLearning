import { Route, Switch } from "react-router";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function Routes() {
	return (
		<Switch>
			<Route path="/welcome">
				<Welcome />
			</Route>
			<Route path="/products" exact>
				<Products />
			</Route>
			<Route path="/products/:productId">
				<ProductDetail />
			</Route>
		</Switch>
	);
}
export default Routes;
