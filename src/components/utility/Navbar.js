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
      <Link to="/"><h1>Playlister <i className="fa fa-music"></i></h1></Link>


      <form className="form-inline">
        { !Auth.isAuthenticated() && <Link to="/login" className="btn btn-secondary navs ">Login</Link> }
        { !Auth.isAuthenticated() && <Link to="/register" className="btn btn-success navs">Register</Link> }
        { Auth.isAuthenticated() && <Link to="/users" className="btn btn-secondary navs">View Users</Link> }
        { Auth.isAuthenticated() && <Link to={`/users/${Auth.getPayload().userId}`} className="btn btn-secondary navs">Your Profile</Link> }
        { Auth.isAuthenticated() && <a href="#" onClick={logout} className="btn btn-danger navs">Logout</a> }
      </form>
    </nav>
  );
};

export default withRouter(Navbar);
