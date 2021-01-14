import { Home, Results, PageNotFound } from './containers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.scss';

function App() {
  const search = 'nature';

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/results">
            <Results search={search} />
          </Route>
          <Route
            path="/page-not-found"
            render={() => <PageNotFound path="/" />}
          />
          <Redirect to="page-not-found" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
