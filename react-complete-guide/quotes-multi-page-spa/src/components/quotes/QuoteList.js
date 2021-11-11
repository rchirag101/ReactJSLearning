import { Fragment } from "react";
import { useHistory, useLocation } from "react-router";

import QuoteItem from "./QuoteItem";

import classes from "./css/QuoteList.module.css";

function sortQuotes(quotes, ascending) {
	return quotes.sort((quoteA, quoteB) => {
		if (ascending) {
			return quoteA.id > quoteB.id ? 1 : -1;
		} else {
			return quoteA.id < quoteB.id ? 1 : -1;
		}
	});
}

const QuoteList = (props) => {
	// useHistory gives us access to the history object, an object that allows us to change and manage the URL,
	// useLocation gives us access to a location object which has information about the currently loaded page, about the currently loaded URL.
	const history = useHistory();
	const location = useLocation();

	// console.log(location);
	const queryParams = new URLSearchParams(location.search);
	const isSortingAscending = queryParams.get("sort") === "asc";

	const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

	function changeSortingHandler() {
		history.push("/quotes?sort=" + (isSortingAscending ? "desc" : "asc"));
	}

	return (
		<Fragment>
			<div className={classes.sorting}>
				<button onClick={changeSortingHandler}>
					Sort {isSortingAscending ? "Descending ↓" : "Ascending ↑"}
				</button>
			</div>

			<ul className={classes.list}>
				{sortedQuotes.map((quote) => (
					<QuoteItem
						key={quote.id}
						id={quote.id}
						author={quote.author}
						text={quote.text}
					/>
				))}
			</ul>
		</Fragment>
	);
};

export default QuoteList;
