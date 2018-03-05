import React from 'react';
import Axios from 'axios';

class UsersIndex extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    // Axios request to get ALL users
    // /api/users
    Axios
      .get('/api/users')
      .then(res => this.setState({ users: res.data }, () => console.log(this.state)))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="image5">
        <div className="container">
          <div className="row">
            <h3>Users</h3>
            { this.state.users && this.state.users.map((user, i) => {
              return(
                <div className="col-md-6" key={i}>
                  <img src={user.image} />
                  <h4>{user.username}</h4>
                </div>
              );
            }) }

            {/* loop over all users and display each inside a JSX template */}
          </div>
        </div>
      </div>
    );
  }
}

export default UsersIndex;
