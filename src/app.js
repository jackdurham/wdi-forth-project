import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UsersRoutes from './components/users/UsersRoutes';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/utility/navbar';
import PlaylistsRoutes from './components/playlists/PlaylistsRoutes';


import 'bootstrap-css-only';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <Navbar />
          </header>
          <main>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <PlaylistsRoutes />
              <UsersRoutes />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
