import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import ProtectedRoute from '../utility/ProtectedRoute';

import UsersShow from  '../users/UsersShow';
import Login from '../auth/Login';
import Register from '../auth/Register';
import PlaylistsIndex from '../playlists/PlaylistsIndex';
import UsersIndex from '../users/UsersIndex';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/users/:id" component={UsersShow} />
      <Route path="/users" component={UsersIndex}/>
      <Route exact path="/" component={PlaylistsIndex} />
    </Switch>
  );
};

export default Routes;
