import { Fragment } from "react";
import { Route, useParams, Link } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
	{ id: "q1", author: "Chirag", text: "Learning React is fun" },
	{ id: "q2", author: "Chitti", text: "I am Chitti" },
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

			<Route path={`/quotes/${params.quoteId}`} exact>
				<div className="centered">
					<Link
						className="btn--flat"
						to={`/quotes/${params.quoteId}/comments`}
					>
						Load Comments
					</Link>
				</div>
			</Route>

			{/* Nested Route */}
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
}

export default QuoteDetail;
