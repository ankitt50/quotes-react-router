import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    // useHistory hook can be used if we can't use links.
    // Links can be used if user clicks on some link to
    // navigate to the new page.
    // But if the navigation is part of a internal process
    // and not due to user clicking on a link, then we must use
    // 'useHistory' hook
    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
