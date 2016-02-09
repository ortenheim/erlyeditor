import { autobind } from 'core-decorators';
import React, { Component, PropTypes } from 'react';
import css from 'react-css-modules';

import { percentageType } from '../../propTypes';
import Slider from '../../Slider';
import Progress from './Progress';
import Indicator from './Indicator';
import styles from './styles';

const { bool, number, string, func } = PropTypes;

export class SeekBar extends Component {
  static propTypes = {
    className: string,
    progressClassName: string,
    sliderThickness: string,
    step: number,
    disabled: bool,
    currentTime: number.isRequired,
    duration: number.isRequired,
    percentage: percentageType.isRequired,
    seeking: bool,
    onSeek: func
  };

  static defaultProps = {
    step: 1,
    sliderThickness: '3rem'
  };

  @autobind
  handleSeek(offset) {
    this.props.onSeek(Number(offset));
  }

  render() {
    const {
      className,
      progressClassName,
      sliderThickness,
      step,
      disabled,
      duration,
      currentTime,
      percentage,
      seeking
    } = this.props;

    return (
      <div className={className} styleName='seek-bar'>
        {percentage && <Progress className={progressClassName} {...percentage} />}
        <Slider
          sliderClassName={disabled ? styles.disabled : styles.normal}
          fillClassName={styles.fill}
          markerClassName={styles.marker}
          min={0}
          max={duration}
          step={step}
          disabled={disabled}
          value={currentTime}
          thickness={sliderThickness}
          onChange={this.handleSeek}>
          {seeking && <Indicator { ...{ currentTime, duration } } />}
        </Slider>
      </div>
    );
  }
}

export default css(SeekBar, styles, { allowMultiple: true });
