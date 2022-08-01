import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";
const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);
  useEffect(() => {
    if (status === "completed") {
      // console.log(quoteData);
      // useHistory hook can be used if we can't use links.
      // Links can be used if user clicks on some link to
      // navigate to the new page.
      // But if the navigation is part of a internal process
      // and not due to user clicking on a link, then we must use
      // 'useHistory' hook
      history.push("/quotes");
    }
  }, [status, history]);
  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
