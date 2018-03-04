import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';
import '../../scss/components/PlaylistsIndex.scss';

class PlaylistsIndex extends React.Component {
  state = {
    videos: [],
    query: ''
  }

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state.query);

    Axios
      .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          q: this.state.query,
          part: 'snippet',
          maxResults: 10,
          videoCategoryId: 10,
          key: 'AIzaSyCVcsZcjTbXh1VC5u4ZJpUoznoTFgNg3AI',
          type: 'video'
        }
      })
      .then(res => {
        const videos = res.data.items;
        this.setState({ videos });

        // const loadedArr = [];
        //
        // const iframes = document.getElementsByClassName('frame');
        //
        // setTimeout(() => {
        //   console.log(iframes);
        //   [].forEach.call(iframes, frame => {
        //     frame.addEventListener('load', () => {
        //       console.log('loaded');
        //     });
        //   });
        // }, 500);
        //
      });

  }

  handleChange = ({ target: { value }}) => {
    this.setState({ query: value });
  }

  addToPlaylist = (video) => {
    console.log(video);
    Axios
      .post('/api/users/addTrack', { videoId: video.id.videoId }, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  handleClearSearchClick = () => {
    this.setState( {videos: []});
  }

  render() {
    return(
      <div className="image">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form className="input-group mb-3" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for music"
                  onChange={this.handleChange}
                />
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="submit">Search</button>
                </div>
              </form>
              <button onClick={this.handleClearSearchClick} className="btn btn-secondary">Clear Search</button>
            </div>
          </div>
          <div className="row">
            { this.state.videos.map((video, i) =>
              <div className="col-md-6" key={i}>
                <iframe width="100" height="150" className="frame" src={`https://www.youtube.com/embed/${video.id.videoId}?rel=0&amp;controls=0`}  frameBorder="0" allow="autoplay; encrypted-media"></iframe>
                { Auth.isAuthenticated() && <button className="btn btn-secondary" onClick={() => this.addToPlaylist(video)}>Add to your profile</button> }
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistsIndex;
