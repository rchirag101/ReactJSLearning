import { useParams } from "react-router";

function ProductDetail() {
	const params = useParams();

	console.log(params);
	// productId comes from App.js: <Route path="/product-detail/:productId"> <ProductDetail /> </Route>
	console.log(params.productId);

	return (
		<section>
			<h1>The Product Detail</h1>
			<p>{params.productId}</p>
		</section>
	);
}

export default ProductDetail;
