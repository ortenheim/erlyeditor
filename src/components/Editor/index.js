import React, { Component, PropTypes } from 'react';
import merge from 'lodash/merge';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import css from 'react-css-modules';

import * as videoActions from '../../modules/html5video/actions';
import * as playerActions from '../../modules/player/actions';

import {
  videoProps,
  videoActionsType,
  playerActionsType
} from '../propTypes';

import Player from '../Player';
import Html5Video from '../Html5Video';

import styles from './styles';

const { bool, number, shape } = PropTypes;

const videos = [
  'http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov',
  'http://users.wfu.edu/yipcw/atg/vid/katamari-star8-10s-h264.mov',
  'http://media.w3.org/2010/05/sintel/trailer.mp4',
  'http://media.w3.org/2010/05/video/movie_300.mp4',
  'https://google.com'
];

export class Editor extends Component {
  static propTypes = {
    actions: shape({
      video: videoActionsType.isRequired,
      player: playerActionsType.isRequired
    }),

    player: shape({
      width: number,
      height: number,
      debug: bool
    }).isRequired,

    video: shape(videoProps).isRequired
  };

  api = {
    toggleMute: () => this.video.toggleMute(),
    toggleLoop: () => this.video.toggleLoop(),
    togglePlay: () => this.video.togglePlay(),
    toggleFullScreen: () => this.video.toggleFullScreen(),
    setVolume: v => this.video.setVolume(v),
    setPlaybackRate: v => this.video.setPlaybackRate(v),
    seek: offset => this.video.seek(offset)
  };

  render() {
    const {
      actions,
      video,
      player: {
        width,
        height,
        ...player
      }
    } = this.props;

    const size = { width, height };

    return (
      <Player api={this.api}
        actions={actions.player}
        { ...{ ...size, video } }
        {...player}>
        <Html5Video ref={r => this.video = r}
          {...video}
          {...size}
          actions={actions.video}
          src={videos[0]} />
      </Player>
    );
  }
}

const selectProps = (state, ownProps) => merge(state.editor, ownProps);
const selectActions = dispatch => ({
  actions: {
    player: bindActionCreators(playerActions, dispatch),
    video: bindActionCreators(videoActions, dispatch)
  }
});

export const StyledEditor = css(Editor, styles, { allowMultiple: true });
export default connect(selectProps, selectActions)(StyledEditor);
