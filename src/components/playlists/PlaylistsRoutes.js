import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PlaylistsIndex from './PlaylistsIndex';

const PlaylistsRoutes = () => {
  return(
    <Switch>
      <Route exact path="/" component={PlaylistsIndex} />
    </Switch>
  );
};

export default PlaylistsRoutes;
