import React from 'react';
import Axios from 'axios';

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

        const videos = res.data.items.map(video => video.id.videoId);

        this.setState({ videos });
      });

  }

  handleChange = ({ target: { value }}) => {
    this.setState({ query: value });
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="search music"
            onChange={this.handleChange}
          />

          <input type="submit" value="Search"/>
        </form>
        <div>
          { this.state.videos.map((video, i) =>
            <div key={i}>
              <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video}?rel=0&amp;controls=0`} frameBorder="0" allow="autoplay; encrypted-media"></iframe>
            </div>
          )}

        </div>
      </div>
    );
  }
}

export default PlaylistsIndex;
