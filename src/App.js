import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Details from './Details';
import SearchParams from './SearchParams';
import ThemeContext from './ThemeContext';
import { render } from 'react-dom';
import { useState } from 'react';

const App = () => {
  const theme = useState('darkBlue');
  return (
    <ThemeContext.Provider value={theme}>
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
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById('root'));
