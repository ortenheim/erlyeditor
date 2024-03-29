import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import PlaybackRate from './PlaybackRate';
import Time from './Time';

import { videoStateType } from '../../propTypes';
import styles from './styles';

const { bool, number, string } = PropTypes;

export const HUD = (props) => {
  const {
    className,
    error,
    focused,
    currentTime,
    duration,
    playbackRate
  } = props;

  return (
    <div className={className} styleName='hud'>
      {!error && focused && <Time { ...{ currentTime, duration } } />}
      {!error && focused && <PlaybackRate value={playbackRate} />}
    </div>
  );
};


HUD.propTypes = {
  className: string,
  error: videoStateType,
  focused: bool,
  currentTime: number,
  duration: number,
  playbackRate: number
};

export default css(HUD, styles, { allowMultiple: true });
