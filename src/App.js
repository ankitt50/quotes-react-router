import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
function App() {
  return (
    // If you want to render only one component,
    // i.e. only one route should be matched and rendered.
    // Then we must use 'Switch'.
    // 'Exact' keyword is used, so that only if  exactly
    // the same path matches then only render that component.
    // ex: '/quotes' Route will also match with '/quotes/:quoteId'
    // if we are not using the exact keyword.
    // Redirect component can be used to redirect the user to a different
    // path/route.
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
