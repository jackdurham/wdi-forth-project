import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from '../utility/ProtectedRoute';

import UsersShow from  '../users/UsersShow';
import Login from '../auth/Login';
import Register from '../auth/Register';
import PlaylistsIndex from '../playlists/PlaylistsIndex';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/users/:id" component={UsersShow} />
      <Route exact path="/" component={PlaylistsIndex} />
    </Switch>
  );
};

export default Routes;
