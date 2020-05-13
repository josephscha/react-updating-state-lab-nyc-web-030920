// Code YouTubeDebugger Component Here
import React from "react";

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
  }

  changeBitrate = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  };

  changeRes = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p",
        },
      },
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.changeBitrate} className="bitrate">
          Change bitrate to 12
        </button>
        <button onClick={this.changeRes} className="resolution">
          Change resolution to 720p
        </button>
      </div>
    );
  }
}
