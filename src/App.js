import Pet from './Pet';
import SearchParams from './SearchParams';
import { render } from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById('root'));
