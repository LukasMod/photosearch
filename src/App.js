import React, { useState } from 'react';
import { Home, Results, PageNotFound } from './containers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.scss';

function App() {
  const [search, setSearch] = useState('');
  const [acceptSearch, setAcceptSearch] = useState(false);
  const clientId = 'xh3eA0B15NkA-iCPrN_KdhybMqz49n7gxU2D1gjOj0E';

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleValidate = (boolean) => {
    setAcceptSearch(boolean);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home
              handleSearch={handleSearch}
              search={search}
              handleValidate={handleValidate}
            />
          </Route>
          <Route path="/results">
            <Results
              clientId={clientId}
              handleSearch={handleSearch}
              search={search}
              handleValidate={handleValidate}
              acceptSearch={acceptSearch}
            />
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
