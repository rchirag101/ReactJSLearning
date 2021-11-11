import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
	{ id: "q1", author: "Chirag", text: "Learning React is fun" },
	{ id: "q2", author: "Chitti", text: "I am Chitti" },
];

function AllQuotes() {
	return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;
