import { useHistory } from "react-router";

import QuoteForm from "../components/quotes/QuoteForm";

function NewQuote() {
	const history = useHistory();

	function addQuoteHandler(quoteData) {
		console.log(quoteData);

		history.push("/quotes");
	}

	return <QuoteForm onAddQuote={addQuoteHandler} />;
}

export default NewQuote;
