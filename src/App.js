import React from 'react';
import './style.css';
import { Header, Footer } from './components/index';
import { Home, Lawyers, Login } from './pages/index';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/lawyers">
            <Lawyers />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
