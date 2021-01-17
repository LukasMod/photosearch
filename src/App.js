import React from 'react';
import { Home, Results, PageNotFound, Header, Footer } from './containers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import StoreProvider from './store/StoreProvider';

import './App.scss';

function App() {
  return (
    <StoreProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Home />
              <Footer />
            </Route>
            <Route path="/results">
              <Header />
              <Results />
              <Footer />
            </Route>
            <Route path="/page-not-found">
              <Home />
              <PageNotFound path="/" />
              <Footer />
            </Route>
            <Redirect to="page-not-found" />
          </Switch>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
