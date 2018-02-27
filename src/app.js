import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Register from './components/auth/Register';
import Login from './components/auth/Login';


import 'bootstrap-css-only';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <h1>Playlister</h1>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </header>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
