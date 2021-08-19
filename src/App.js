import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Details from './Details';
import SearchParams from './SearchParams';
import { render } from 'react-dom';

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

render(<App />, document.getElementById('root'));
