import { autobind } from 'core-decorators';
import throttle from 'lodash/throttle';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styleable from 'react-styleable';

import * as actions from '../../modules/player/actions';
import selector from '../../modules/player/selector';
import * as storage from '../../lib/storage';

import HUD from './HUD';
import Info from './Info';
import SeekBar from './SeekBar';
import Overlay from './Overlay';
import Controls from './Controls';

import styles from './styles';

const {
  bool, number, string,
  object, func, shape
} = PropTypes;

export class Player extends Component {
  static propTypes = {
    autoPlay: bool,
    autoBuffer: bool,
    controls: bool,
    muted: bool,
    repeat: bool,
    volume: number,
    src: string,
    poster: string,

    width: number,
    height: number,
    css: object.isRequired,

    source: string,
    playing: bool,

    actions: shape({
      togglePlay: func,
      stop: func,
      next: func,
      previous: func,
      updateTime: func,
      seek: func
    }).isRequired
  };

  static defaultProps = {
    autoPlay: false,
    autoBuffer: false,
    controls: true,
    muted: false,
    repeat: false,
    volume: 0.5,

    width: 640,
    height: 480
  };

  state = {
    autoPlay: storage.load('player.video.autoPlay', this.props.autoPlay),
    autoBuffer: storage.load('player.video.autoBuffer', this.props.autoBuffer),
    controls: storage.load('player.video.controls', this.props.controls),
    muted: storage.load('player.video.muted', this.props.muted),
    repeat: storage.load('player.video.repeat', this.props.repeat),
    volume: storage.load('player.video.volume', this.props.volume),
    focused: false,
    seeking: false,

    loading: false,
    error: false,
    networkState: 0,
    duration: 0,
    currentTime: 0,
    buffered: false,
    readyState: null
  };

  componentWillMount() {
    this.updateStateThrottled = throttle(this.updateState, 100);
  }

  componentDidMount() {
    this.video.addEventListener('pause', this.handlePause);
    this.video.addEventListener('play', this.handlePlay);
    this.video.addEventListener('volumechange', this.handleVolumeChange);

    this.video.volume = this.state.volume;
  }

  componentWillUnmount() {
    this.video.removeEventListener('pause', this.handlePause);
    this.video.removeEventListener('play', this.handlePlay);
    this.video.removeEventListener('volumechange', this.handleVolumeChange);
  }

  @autobind
  updateState() {
  }

  focus = () => this.setState({ focused: true });
  unfocus = () => this.setState({ focused: false });

  handlePause = () => this.props.actions.togglePlay(false);
  handlePlay = () => this.props.actions.togglePlay(true);

  handleSeekStart = () => this.setState({ seeking: true });
  handleSeekEnd = () => this.setState({ seeking: false });

  handleVolumeChange = (e) => {
    const volume = e.currentTarget.volume;
    storage.save('player.video.volume', volume);
    this.setState({ volume });
  };

  @autobind
  changeVolume(volume) {
    this.video.volume = volume;
  }

  @autobind
  seek(offset) {
    this.props.actions.seek(offset);
    this.video.currentTime = offset;
  }

  @autobind
  togglePlay() {
    if (this.props.playing) {
      this.video.pause();
    } else {
      this.video.play();
    }
  }

  @autobind
  playPrevious() {
  }

  @autobind
  playNext() {
  }

  @autobind
  decreasePlaybackRate() {
  }

  @autobind
  increasePlaybackRate() {
  }

  @autobind
  toggleMute() {
    const muted = !this.state.muted;
    this.video.muted = muted;
    this.setState({ muted });
    storage.save('player.video.muted', muted);
  }

  @autobind
  toggleRepeat() {
    const repeat = !this.state.repeat;
    this.setState({ repeat });
    storage.save('player.video.repeat', repeat);
  }

  @autobind
  toggleFullScreen() {
    if (this.video.requestFullscreen) {
      this.video.requestFullscreen();
    } else if (this.video.msRequestFullscreen) {
      this.video.msRequestFullscreen();
    } else if (this.video.mozRequestFullScreen) {
      this.video.mozRequestFullScreen();
    } else if (this.video.webkitRequestFullscreen) {
      this.video.webkitRequestFullscreen();
    }
  }

  render() {
    const {
      css,
      autoPlay,
      autoBuffer,
      src,
      poster,
      controls,
      width,
      height,
      playing,
      source
    } = this.props;

    const {
      focused, seeking, duration,
      muted, repeat, volume
    } = this.state;

    const containerHandlers = {
      onFocus: this.focus,
      onBlur: this.unfocus,
      onMouseOver: this.focus,
      onMouseLeave: this.unfocus
    };

    return (
      <div className={css.player}
        style={{ width, height }}
        {...containerHandlers}>
        <video className={css.video}
          src={src || source}
          ref={ref => this.video = ref}
          {...{ autoPlay, autoBuffer, poster }} />
        <Overlay playing={playing}>
          <HUD playing={playing} onTogglePlay={this.togglePlay} />
        </Overlay>
        <SeekBar seeking={seeking} />
        <Info { ...{ playing, duration } } />
        {controls &&
          <Controls
            visible={focused}
            { ...{ playing, muted, volume, repeat } }
            onTogglePlay={this.togglePlay}
            onVolumeChange={this.changeVolume}
            onPrevious={this.playPrevious}
            onNext={this.playNext}
            onDecreasePlaybackRate={this.decreasePlaybackRate}
            onIncreasePlaybackRate={this.increasePlaybackRate}
            onToggleRepeat={this.toggleRepeat}
            onToggleFullScreen={this.toggleFullScreen}
          />
        }
      </div>
    );
  }
}

function selectActions(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export const StyledPlayer = styleable(styles)(Player);
export default connect(selector, selectActions)(StyledPlayer);
