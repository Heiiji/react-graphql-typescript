import React from 'react';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
import RoomDetails from './pages/RoomDetails';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from './store/selectors';

function Router() {
  const user = useSelector(getUser);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/auth">
        <Auth />
      </Route>
      <Route exact path="/room/:roomId">
        <RoomDetails />
      </Route>
      {user.role === 0 ? (
        <Route exact path="/admin">
          <Admin />
        </Route>
      ) : (
        ''
      )}
    </Switch>
  );
}

export default Router;
