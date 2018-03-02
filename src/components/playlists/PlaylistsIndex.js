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

        console.log(res);

        const videos = res.data.items;

        this.setState({ videos });
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
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="search music"
            onChange={this.handleChange}
          />
          <input type="submit" value="Search"/>
          <input type="submit" value="Clear Search" onClick={this.handleClearSearchClick} />
        </form>

        <div>
          { this.state.videos.map((video, i) =>
            <div key={i}>
              <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.id.videoId}?rel=0&amp;controls=0`} frameBorder="0" allow="autoplay; encrypted-media"></iframe>
              { Auth.isAuthenticated() && <button onClick={() => this.addToPlaylist(video)}>Add to your profile</button> }
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PlaylistsIndex;
