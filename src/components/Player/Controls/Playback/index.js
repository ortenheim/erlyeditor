import React, { PropTypes } from 'react';
import styleable from 'react-styleable';
import classNames from 'classnames';

import Button from '../../../Button';
import styles from './styles';

const { bool, string, object, func } = PropTypes;

export const Playback = (props) => {
  const {
    css, className,
    playing,
    onTogglePlay,
    onPrevious,
    onNext,
    onDecreasePlaybackRate,
    onIncreasePlaybackRate
  } = props;

  return (
    <div className={classNames(className, css.playback)}>
      {onPrevious && <Button icon='skip_previous' onClick={onPrevious} />}
      {onDecreasePlaybackRate && <Button icon='fast_rewind' onClick={onDecreasePlaybackRate} />}
      <Button icon={playing ? 'pause' : 'play_arrow'} onClick={onTogglePlay} />
      {onIncreasePlaybackRate && <Button icon='fast_forward' onClick={onIncreasePlaybackRate} />}
      {onNext && <Button icon='skip_next' onClick={onNext} />}
    </div>
  );
};

Playback.propTypes = {
  css: object.isRequired,
  className: string,
  playing: bool.isRequired,
  onTogglePlay: func.isRequired,
  onPrevious: func,
  onNext: func,
  onDecreasePlaybackRate: func,
  onIncreasePlaybackRate: func
};

export default styleable(styles)(Playback);
