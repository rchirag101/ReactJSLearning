import { Fragment } from "react";
import { useParams } from "react-router";

function QuoteDetail() {
	const params = useParams();

	return (
		<Fragment>
			<h1>QuoteDetail</h1>
			<p>{params.quoteId}</p>
		</Fragment>
	);
}

export default QuoteDetail;
