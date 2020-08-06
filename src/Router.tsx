import React from 'react';
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import RoomDetails from "./pages/RoomDetails";
import { Switch, Route } from 'react-router-dom'

function Router() {
  return (
      <Switch>
        <Route exact path="/" >
            <Home/>
        </Route>
          <Route exact path="/auth" >
              <Auth/>
          </Route>
          <Route exact path="/admin" >
              <Admin/>
          </Route>
        <Route exact path="/room/:roomId" >
            <RoomDetails/>
        </Route>
      </Switch>
  );
}

export default Router;
