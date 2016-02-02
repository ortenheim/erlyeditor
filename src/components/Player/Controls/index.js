import React, { PropTypes } from 'react';
import styleable from 'react-styleable';
import { spring, Motion, presets } from 'react-motion';

import Playback from './Playback';
import Options from './Options';
import Volume from './Volume';

import styles from './styles';

const { bool, number, object, func } = PropTypes;

export const Controls = (props) => {
  const {
    css,
    visible,
    playing,
    muted,
    volume,
    repeat,
    onTogglePlay,
    onVolumeChange,
    onPrevious,
    onNext,
    onDecreasePlaybackRate,
    onIncreasePlaybackRate,
    onToggleRepeat,
    onToggleFullScreen
  } = props;

  const playbackHandlers = {
    onTogglePlay,
    onPrevious,
    onNext,
    onDecreasePlaybackRate,
    onIncreasePlaybackRate
  };

  const animationStyle = {
    opacity: spring(visible ? 1 : 0, presets.stiff)
  };

  return (
    <Motion style={animationStyle}>{s =>
      <div className={css.controls} style={s}>
        {onTogglePlay && <Playback playing={playing} { ...playbackHandlers } />}
        <Options { ...{ repeat, onToggleRepeat, onToggleFullScreen } } />
        {onVolumeChange && <Volume { ...{ muted, volume, onVolumeChange } } />}
      </div>
    }</Motion>
  );
};

Controls.propTypes = {
  css: object.isRequired,
  visible: bool,
  playing: bool,
  muted: bool,
  volume: number,
  repeat: bool,
  onTogglePlay: func,
  onVolumeChange: func,
  onPrevious: func,
  onNext: func,
  onDecreasePlaybackRate: func,
  onIncreasePlaybackRate: func,
  onToggleRepeat: func,
  onToggleFullScreen: func
};

Controls.defaultProps = {
  visible: true
};

export default styleable(styles)(Controls);
