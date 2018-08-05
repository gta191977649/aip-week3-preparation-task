import React, { Component } from 'react';
import 'DPlayer/dist/DPlayer.min.css';
import DPlayer from 'DPlayer';
class BangumiPlayer extends Component {
    
  constructor() {
    super();
    this.state = {
      customers: []
    }
  }
  componentDidMount() {
      /*
    fetch('/api/dplayer')
    .then(res => res.json())
    .then(customers => this.setState({customers}));*/
    const dp = new DPlayer({
        container: document.getElementById('dplayer'),
        screenshot: true,
        video: {
            url: 'demo.mp4',
            pic: 'demo.jpg',
            thumbnails: 'thumbnails.jpg'
        },
        subtitle: {
            url: 'webvtt.vtt'
        },
        danmaku: {
            id: 'demo',
            api: 'https://api.prprpr.me/dplayer3/'
        }
    });
  }
  
  render() {
    return (
      <div>
        <h1>DPlayer</h1>
        
      </div>
    );
  }
}

export default BangumiPlayer;
