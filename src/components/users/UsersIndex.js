import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class UsersIndex extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    Axios
      .get('/api/users')
      .then(res => this.setState({ users: res.data }, () => console.log(this.state)))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="image5">
        <div className="container">
          <h3>Users</h3>
          <div className="row">
            { this.state.users && this.state.users.map((user, i) => {
              return(
                <div className="col-md-6" key={i}>
                  <div className="dog">
                    <Link to={`/users/${user.id}`}>
                      <img src={user.image} />
                      <h4>{user.username}</h4>
                    </Link>
                  </div>
                </div>
              );
            }) }
          </div>
        </div>
      </div>
    );
  }
}

export default UsersIndex;
