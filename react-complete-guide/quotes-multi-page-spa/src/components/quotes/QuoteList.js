import { Fragment } from "react";
import { useHistory, useLocation } from "react-router";

import QuoteItem from "./QuoteItem";

import classes from "./css/QuoteList.module.css";

const QuoteList = (props) => {
	// useHistory gives us access to the history object, an object that allows us to change and manage the URL,
	// useLocation gives us access to a location object which has information about the currently loaded page, about the currently loaded URL.
	const history = useHistory();
	const location = useLocation();

	// console.log(location);
	const queryParams = new URLSearchParams(location.search);
	const isSortingAscending = queryParams.get("sort") === "asc";

	function changeSortingHandler() {
		history.push("/quotes?sort=" + (isSortingAscending ? "desc" : "asc"));
	}

	return (
		<Fragment>
			<div className={classes.sorting}>
				<button onClick={changeSortingHandler}>
					Sort {isSortingAscending ? "Descending" : "Ascending"}
				</button>
			</div>

			<ul className={classes.list}>
				{props.quotes.map((quote) => (
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
