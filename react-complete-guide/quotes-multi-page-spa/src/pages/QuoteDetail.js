import { Fragment } from "react";
import { Route, useParams } from "react-router";

import Comments from "../components/comments/Comments";

function QuoteDetail() {
	const params = useParams();

	return (
		<Fragment>
			<h1>QuoteDetail</h1>
			<p>{params.quoteId}</p>

			{/* Nested Route */}
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
}

export default QuoteDetail;
