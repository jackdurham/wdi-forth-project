import React, { Component } from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';

import Modal from '../utility/Modal';

class UsersProfile extends Component {
  state = {
    user: {},
    videos: []
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }, () => console.log(this.state)))
      .catch(err => console.log(err));
  }
  deleteSong = ({target: { value }}) => {
    Axios
      .put(`/api/users/deleteTrack/${value}`,{}, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` }})
      .then(res => {
        this.setState({ user: res.data }, () => console.log(this.state));
      })
      .catch(err => console.log(err));
  }

  followUser = () => {
    Axios
      .get(`/api//users/follow/${this.state.user.id}`, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}})
      .then(res => {
        const user = Object.assign({}, this.state.user, { followers: res.data.followers });
        this.setState({ user }, () => console.log(this.state));
      });
  }

  render() {
    return(
      <div className="image2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>{`${this.state.user.username}'s profile.`}</h3>
              { this.state.user.username && <Modal user={this.state.user}/> }
              <img src={ this.state.user.image } />
              { this.state.user.username && this.state.user.followers.every(follower => follower.id !== Auth.getPayload().userId) && <button onClick={this.followUser} className="btn btn-secondary navs">Follow</button>}
              {' '}
              { this.state.user.tracks && this.state.user.tracks.map((video, i) => {
                return(
                  <div className="col-md-6" key={i}>
                    <iframe width="100" height="150" src={`https://www.youtube.com/embed/${video}?rel=0&amp;controls=0`} frameBorder="0" allow="autoplay; encrypted-media"></iframe>
                    <button className="btn btn-secondary" value={video} onClick={this.deleteSong}>Delete</button>
                  </div>);
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UsersProfile;
