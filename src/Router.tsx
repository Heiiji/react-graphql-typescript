import React from 'react';
import Home from "./pages/home";
import { Switch, Route } from 'react-router-dom'

function Router() {
  return (
      <Switch>
        <Route exact path="/" >
            <Home/>
        </Route>
      </Switch>
  );
}

export default Router;
