import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "Ankit", text: "Reactjs is the best frontend library" },
  { id: "q2", author: "Ankit Tripathi", text: "Reactjs is so much fuuunnnnn!" },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
