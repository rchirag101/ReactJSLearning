function Products() {
	const listStyle = { listStyleType: "none" };

	return (
		<section>
			<h1>The Products Page</h1>
			<ul style={listStyle}>
				<li>A Book</li>
				<li>Laptop</li>
				<li>Water Bottle</li>
			</ul>
		</section>
	);
}

export default Products;
