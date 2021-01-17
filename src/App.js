import React, { useState } from 'react';
import { Home, Results, PageNotFound, Header, Footer } from './containers';
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

  const handleSearch = (text) => {
    setSearch(text);
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
            <Footer />
          </Route>
          <Route path="/results">
            <Header
              handleSearch={handleSearch}
              search={search}
              handleValidate={handleValidate}
            />
            <Results
              clientId={clientId}
              handleSearch={handleSearch}
              search={search}
              handleValidate={handleValidate}
              acceptSearch={acceptSearch}
            />

            <Footer />
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
