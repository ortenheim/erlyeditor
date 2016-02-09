import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import Button from '../../../Button';
import tooltip from '../../../hoc/tooltip';

import styles from './styles';

const TooltipButton = tooltip(Button);
const { bool, number, string, func } = PropTypes;

export const Playback = (props) => {
  const {
    className,
    error,
    paused,
    playbackRate,
    onTogglePlay,
    onPrevious,
    onNext,
    onDecreasePlaybackRate,
    onIncreasePlaybackRate
  } = props;

  return (
    <div className={className} styleName='playback'>
      {onPrevious &&
        <TooltipButton filled disabled
          tooltipText='previous'
          delay={1000}
          icon='skip_previous'
          onClick={onPrevious}
        />
      }
      {onDecreasePlaybackRate &&
        <TooltipButton filled
          tooltipText='descrease playback rate'
          delay={1000}
          disabled={error || playbackRate < 0.5}
          icon='fast_rewind'
          onClick={onDecreasePlaybackRate}
        />
      }
      <Button disabled={error}
        icon={paused ? 'play_arrow' : 'pause' }
        onClick={onTogglePlay}
      />
      {onIncreasePlaybackRate &&
        <TooltipButton filled
          tooltipText='increase playback rate'
          delay={1000}
          disabled={error || playbackRate > 3.75}
          icon='fast_forward'
          onClick={onIncreasePlaybackRate}
        />
      }
      {onNext &&
        <TooltipButton filled disabled
          tooltipText='next'
          delay={1000}
          icon='skip_next'
          onClick={onNext}
        />
      }
    </div>
  );
};

Playback.propTypes = {
  className: string,
  error: bool,
  paused: bool,
  playbackRate: number,
  onTogglePlay: func.isRequired,
  onPrevious: func,
  onNext: func,
  onDecreasePlaybackRate: func,
  onIncreasePlaybackRate: func
};

export default css(Playback, styles, { allowMultiple: true });
