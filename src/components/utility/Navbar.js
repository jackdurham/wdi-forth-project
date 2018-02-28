import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';

const Navbar = ({ history }) => {
  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return(
    <nav className="navbar">
      <Link to="/"><h1>Playlister</h1></Link>
      { !Auth.isAuthenticated() && <Link to="/login" className="btn btn-secondary">Login</Link> }
      { !Auth.isAuthenticated() && <Link to="/register" className="btn btn-success">Register</Link> }
      { Auth.isAuthenticated() && <Link to={`/users/${Auth.getPayload().userId}`}>Your Profile</Link> }
      { Auth.isAuthenticated() && <a href="#" onClick={logout}>Logout</a> }
    </nav>
  );
};

export default withRouter(Navbar);
