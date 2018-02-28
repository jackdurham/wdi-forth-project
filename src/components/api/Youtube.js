import React from 'react';
import YouTube from 'react-youtube';

class Youtube extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: 'https://developers.google.com/youtube/player_parameters'
    };

    return (
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default Youtube;
