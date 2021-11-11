import { Fragment } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
	{ id: "q1", author: "Chirag", text: "Learning React is fun" },
	{ id: "q2", author: "Chitti", text: "I am Chitti" },
];

function QuoteDetail() {
	const params = useParams();

	// useRouteMatch() is to hook name provided by react-router-dom.
	// It's kind of similar to use location but it has more information about the currently loaded route.
	// Not just about the URL but about some internally managed data React Router is aware of.
	const match = useRouteMatch();
	console.log(match);

	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

	if (!quote) {
		return <p>No Quote Found!!!</p>;
	}

	return (
		<Fragment>
			<HighlightedQuote text={quote.text} author={quote.author} />

			<Route path={match.path} exact>
				<div className="centered">
					<Link className="btn--flat" to={`${match.url}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>

			{/* Nested Route */}
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
}

export default QuoteDetail;
