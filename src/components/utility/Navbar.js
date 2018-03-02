import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';

// import 'font-awesome/css/font-awesome.css';
{/* <i className="fas fa-headphones"></i> */}


const Navbar = ({ history }) => {
  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return(
    <nav className="navbar">
      <Link to="/"><h1 className="title">Playlister</h1></Link>
      { !Auth.isAuthenticated() && <Link to="/login" className="btn btn-secondary raised right">Login</Link> }
      { !Auth.isAuthenticated() && <Link to="/register" className="btn btn-success raised">Register</Link> }
      { Auth.isAuthenticated() && <Link to={`/users/${Auth.getPayload().userId}`} className="btn btn-success raised right">Your Profile</Link> }
      { Auth.isAuthenticated() && <a href="#" onClick={logout} className="btn btn-danger raised">Logout</a> }
    </nav>
  );
};

export default withRouter(Navbar);
