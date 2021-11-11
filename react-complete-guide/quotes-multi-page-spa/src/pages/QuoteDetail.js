import { Fragment } from "react";
import { Route, useParams } from "react-router";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
	{ id: "q1", author: "Chirag", text: "Learning React is fun" },
	{ id: "q2", author: "Chitti", text: "I'm Chitti" },
];

function QuoteDetail() {
	const params = useParams();

	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

	if (!quote) {
		return <p>No Quote Found!!!</p>;
	}

	return (
		<Fragment>
			<HighlightedQuote text={quote.text} author={quote.author} />

			{/* Nested Route */}
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
}

export default QuoteDetail;
