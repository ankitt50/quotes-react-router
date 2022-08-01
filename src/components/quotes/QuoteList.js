import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  };

  const history = useHistory();
  // use location hook is provided by react-router-dom
  // It can be used to fetch details like query params, url path etc.
  const location = useLocation();
  //console.log(location);
  // URLSearchParams is provided by JS and is built in in browsers.
  const queryParams = new URLSearchParams(location.search);
  const isAsc = queryParams.get("sort") === "asc" ? true : false;
  sortQuotes(props.quotes, isAsc);
  const changeSortingHandler = () => {
    // every time we push page to history object, the component
    // is re-rendered. even if the same page is pushed.
    // history.push("/quotes?sort=" + (isAsc ? "desc" : "asc"));
    // below way to push, can be used if url becomes very complex,
    // due to the query parameters.
    history.push({
      pathname: location.pathname,
      search: isAsc ? "?sort=desc" : "?sort=asc",
    });
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          {"Sort " + (!isAsc ? "Ascending" : "Descending")}
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
