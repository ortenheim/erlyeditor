import clamp from 'lodash/clamp';
import React, { Component, PropTypes } from 'react';
import css from 'react-css-modules';

import {
  videoProps,
  videoAPIType,
  playbackRateType,
  playerActionsType
} from '../propTypes';

import HUD from './HUD';
import Info from './Info';
import SeekBar from './SeekBar';
import Overlay from './Overlay';
import Controls from './Controls';

import styles from './styles';

const { bool, number, string, node, shape } = PropTypes;

export class Player extends Component {
  static propTypes = {
    className: string,
    children: node.isRequired,

    debug: bool,
    width: number,
    height: number,
    playbackRate: playbackRateType,

    actions: playerActionsType.isRequired,

    video: shape(videoProps).isRequired,
    api: videoAPIType
  };

  static defaultProps = {
    debug: Boolean(__DEVELOPMENT__),
    width: 640,
    height: 480,
    playbackRate: {
      step: 0.25,
      min: 0.25,
      max: 4
    }
  };

  state = { focused: false };

  focus = () => this.setState({ focused: true });
  unfocus = () => this.setState({ focused: false });

  decreasePlaybackRate = () => this.setPlaybackRate(-1);
  increasePlaybackRate = () => this.setPlaybackRate(+1);

  setPlaybackRate = factor => {
    const { api, video, playbackRate: { min, max, step } } = this.props;
    const value = clamp(video.playbackRate + step * factor, min, max);
    api.setPlaybackRate(value);
  };

  renderContainer() {
    if (!React.Children.count) return null;

    const { children, debug, api, video } = this.props;
    const { focused } = this.state;

    return (
      <div styleName='container'>
        {children}
        <Overlay {...video} debug={debug} onTogglePlay={api.togglePlay}>
          <HUD {...video} focused={focused} />
        </Overlay>
      </div>
    );
  }

  render() {
    const { className, width, height, actions, video, api } = this.props;
    const { focused } = this.state;

    return (
      <div className={className}
        styleName='player'
        style={{ width, height }}
        onMouseEnter={this.focus}
        onMouseLeave={this.unfocus}>
        {this.renderContainer()}
        <SeekBar {...video}
          disabled={Boolean(video.error)}
          step={1}
          onSeek={api.seek}
        />
        <Info />
        <Controls {...video}
          error={Boolean(video.error)}
          visible={focused}
          onToggleDebugMonitor={actions.toggleDebugMonitor}
          onVolumeChange={api.setVolume}
          onTogglePlay={api.togglePlay}
          onToggleMute={api.toggleMute}
          onToggleLoop={api.toggleLoop}
          onToggleFullScreen={api.toggleFullScreen}
          onDecreasePlaybackRate={this.decreasePlaybackRate}
          onIncreasePlaybackRate={this.increasePlaybackRate}
        />
      </div>
    );
  }
}

export default css(Player, styles, { allowMultiple: true });
