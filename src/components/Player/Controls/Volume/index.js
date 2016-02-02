import { autobind } from 'core-decorators';
import React, { Component, PropTypes } from 'react';
import clamp from 'lodash/clamp';
import styleable from 'react-styleable';
import cn from 'classnames';
import { spring, presets, Motion } from 'react-motion';

import Button from '../../../Button';
import styles from './styles';

const { bool, string, number, func, object } = PropTypes;

export class Volume extends Component {
  static propTypes = {
    css: object.isRequired,
    className: string,
    buttonClassName: string,
    containerClassName: string,
    barClassName: string,
    valueClassName: string,
    volume: number.isRequired,
    muted: bool.isRequired,
    onVolumeChange: func.isRequired,
    onToggle: func
  };

  state = { expanded: false };

  @autobind
  handleToggle() {
    const expanded = !this.state.expanded;

    this.setState({ expanded });
    if (expanded) {
      document.addEventListener('mousedown', this.handleMouseDown);
    }

    if (this.props.onToggle) {
      this.props.onToggle(expanded);
    }
  }

  @autobind
  handleBarMouseDown() {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  @autobind
  handleMouseUp() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseMove = (e) => this.changeVolume(e);

  @autobind
  handleMouseDown(e) {
    if (!this.state.expanded) return;

    e.stopPropagation();

    let source = e.target;
    while (source.parentNode) {
      if (source === this.root) return;
      source = source.parentNode;
    }

    document.removeEventListener('mousedown', this.handleMouseDown);
    this.setState({ expanded: false });
  }

  @autobind
  changeVolume(e) {
    const boundingRect = this.bar.getBoundingClientRect();
    const value = (e.clientY - boundingRect.top) / this.bar.offsetHeight;
    const factor = 1 - value;
    const volume = clamp(factor, 0, 1);

    this.props.onVolumeChange(volume);
  }

  @autobind
  changeVolumeToMin() {
    this.props.onVolumeChange(0);
  }

  @autobind
  changeVolumeToMax() {
    this.props.onVolumeChange(1);
  }

  render() {
    const {
      css,
      className,
      buttonClassName,
      containerClassName,
      barClassName,
      valueClassName,
      volume,
      muted
    } = this.props;

    const { expanded } = this.state;

    const silent = muted || volume === 0;
    const toggleIcon = silent ? 'volume_off' :
      volume > 0.5 ? 'volume_up' : 'volume_down';

    const percentage = volume * 100;
    const valueStyle = { top: `${100 - percentage}%` };
    const animationStyle = {
      opacity: spring(expanded ? 1 : 0, presets.stiff)
    };

    return (
      <div className={cn(className, css.volume)}
        ref={r => this.root = r}
      >
        <Button className={cn(buttonClassName, css.toggleButton)}
          icon={toggleIcon} onClick={this.handleToggle}
        />
        <Motion style={animationStyle}>{s =>
          <div className={cn(containerClassName, css.container)} style={s}>
            <Button icon='volume_up'
              className={cn(buttonClassName, css.setToMaxButton)}
              onClick={this.changeVolumeToMax}
            />
            <div className={cn(barClassName, css.bar)}
              ref={r => this.bar = r} onClick={this.changeVolume}
              onMouseDown={this.handleBarMouseDown}
            >
              <div className={cn(valueClassName, css.value)} style={valueStyle} />
            </div>
            <Button icon='volume_off'
              className={cn(buttonClassName, css.setToMinButton)}
              onClick={this.changeVolumeToMin}
            />
          </div>
        }</Motion>
      </div>
    );
  }
}

export default styleable(styles)(Volume);
