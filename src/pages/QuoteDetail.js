import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Ankit", text: "Reactjs is the best frontend library" },
  { id: "q2", author: "Ankit Tripathi", text: "Reactjs is so much fuuunnnnn!" },
];
const QuoteDetail = () => {
  const { quoteId } = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);
  if (!quote) {
    return <h1>Quote not Found!</h1>;
  }
  return (
    <Fragment>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
