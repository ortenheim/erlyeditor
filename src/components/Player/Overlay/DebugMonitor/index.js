import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import { videoStateType, percentageType } from '../../../propTypes';
import styles from './styles';

const { number } = PropTypes;

export const DebugMonitor = (props) => {
  const {
    networkState,
    readyState,
    currentTime,
    duration,
    percentage
  } = props;

  const { buffered, played } = percentage;

  return (
    <div styleName='debug-monitor'>
      <ul styleName='playback'>
        <li><span styleName='label'>{`currentTime:`}</span>{currentTime}</li>
        <li><span styleName='label'>{`duration:`}</span>{duration}</li>
        <li><span styleName='label'>{`buffered:`}</span>{`${played}%`}</li>
        <li><span styleName='label'>{`played:`}</span>{`${buffered}%`}</li>
      </ul>
      {networkState &&
        <dl styleName='network-state'>
          <dt styleName='title'>
            <strong styleName='code'>{networkState.code}</strong>
            {networkState.title}
          </dt>
          <dd styleName='body'>{networkState.body}</dd>
        </dl>
      }
      {readyState &&
        <dl styleName='ready-state'>
          <dt styleName='title'>
            <strong styleName='code'>{readyState.code}</strong>
            {readyState.title}
          </dt>
          <dd styleName='body'>{readyState.body}</dd>
        </dl>
      }
    </div>
  );
};

DebugMonitor.propTypes = {
  duration: number,
  percentage: percentageType,
  currentTime: number,
  networkState: videoStateType,
  readyState: videoStateType
};

export default css(DebugMonitor, styles);
