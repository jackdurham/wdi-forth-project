import React, { Component } from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';

class UsersProfile extends Component {
  state = {
    user: [],
    videos: []
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }, () => console.log(this.state)))
      .catch(err => console.log(err));
  }
  deleteSong = () => {
    Axios
      .delete(`/api/playlists/${this.props.match.params.id}`, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` }})
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <h3>{`${this.state.user.username}'s profile.`}</h3>
        <img src={ this.state.user.image } />
        { this.state.user.tracks && this.state.user.tracks.map((video, i) => {
          return(<div key={i}>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video}?rel=0&amp;controls=0`} frameBorder="0" allow="autoplay; encrypted-media"></iframe>
            <button onClick={this.deleteSong}>Delete</button>
          </div>);
        })}
      </div>
    );
  }
}

export default UsersProfile;
