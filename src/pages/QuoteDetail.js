import { Fragment, useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
// const DUMMY_QUOTES = [
//   { id: "q1", author: "Ankit", text: "Reactjs is the best frontend library" },
//   { id: "q2", author: "Ankit Tripathi", text: "Reactjs is so much fuuunnnnn!" },
// ];
const QuoteDetail = () => {
  const match = useRouteMatch();
  const { quoteId } = useParams();
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  // if (status === "completed" && !loadedQuote && loadedQuote === "") {
  //   return <NoQuotesFound />;
  // }
  //const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);
  if (!loadedQuote.text) {
    return <h1>Quote not Found!</h1>;
  }
  return (
    <Fragment>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
      {/* <Route path="/quotes/:quoteId" exact> This will also work, 
      but makes the code less flexible*/}
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
