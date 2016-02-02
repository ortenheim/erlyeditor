import React, { Component } from 'react';
import css from 'react-css-modules';
import { Player } from 'erlyeditor';

import styles from './styles';

const videos = [
  'http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov',
  'http://users.wfu.edu/yipcw/atg/vid/katamari-star8-10s-h264.mov',
  'http://media.w3.org/2010/05/sintel/trailer.mp4',
  'http://media.w3.org/2010/05/video/movie_300.mp4',
  'https://google.com'
];

export class Demo extends Component {
  render() {
    return (
      <div styleName='root'>
        <h1>{'Video player demo page'}</h1>
        <Player autoPlay src={videos[0]} />
      </div>
    );
  }
}

export default css(Demo, styles);
