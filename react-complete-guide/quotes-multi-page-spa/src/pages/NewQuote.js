import { useEffect } from "react";
import { useHistory } from "react-router";

import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

import QuoteForm from "../components/quotes/QuoteForm";

function NewQuote() {
	const { sendRequest, status } = useHttp(addQuote);

	const history = useHistory();

	useEffect(() => {
		if (status === "completed") {
			history.push("/quotes");
		}
	}, [status, history]);

	function addQuoteHandler(quoteData) {
		// console.log(quoteData);
		sendRequest(quoteData);
	}

	return (
		<QuoteForm
			isLoading={status === "pending"}
			onAddQuote={addQuoteHandler}
		/>
	);
}

export default NewQuote;
