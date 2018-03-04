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
      <Link to="/"><h1>Playlister <i className="fa-music"></i></h1></Link>

      <form className="searchusers input-group">
        <input
          className="form-control"
          placeholder="search users"
        />
        <button className="btn btn-secondary">Search</button>
      </form>

      { !Auth.isAuthenticated() && <Link to="/login" className="btn btn-secondary right move">Login</Link> }
      { !Auth.isAuthenticated() && <Link to="/register" className="btn btn-success move">Register</Link> }
      { Auth.isAuthenticated() && <Link to={`/users/${Auth.getPayload().userId}`} className="btn btn-success right move">Your Profile</Link> }
      { Auth.isAuthenticated() && <a href="#" onClick={logout} className="btn btn-danger move">Logout</a> }
    </nav>
  );
};

export default withRouter(Navbar);
