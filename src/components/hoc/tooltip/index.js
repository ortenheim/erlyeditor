import { autobind } from 'core-decorators';
import React, { Component, PropTypes } from 'react';
import cn from 'classnames';

import styles from './styles';

const { bool, number, string, func, node } = PropTypes;

export const tooltip = (ComposedComponent) => class extends Component {
  static propTypes = {
    className: string,
    tooltipText: string,
    tooltipTop: bool,
    tooltipDelay: number,
    tooltipHideOnClick: bool,
    children: node,
    onClick: func,
    onMouseEnter: func,
    onMouseLeave: func
  };

  static defaultProps = {
    tooltip: 0,
    tooltipTop: false,
    tooltipHideOnClick: true
  };

  state = { visible: false };

  resetTimeout() {
    if (this.timeout) clearTimeout(this.timeout);
  }

  @autobind
  handleMouseEnter() {
    this.resetTimeout();
    this.timeout = setTimeout(() => this.setState({ visible: true }), this.props.tooltipDelay);
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter();
    }
  }

  @autobind
  handleMouseLeave() {
    this.resetTimeout();
    if (this.state.visible) this.setState({ visible: false });
    if (this.props.onMouseLeave) this.props.onMouseLeave();
  }

  @autobind
  handleClick() {
    this.resetTimeout();
    if (this.props.tooltipHideOnClick) this.setState({ visible: false });
    if (this.props.onClick) this.props.onClick();
  }

  render() {
    const {
      className,
      tooltipText,
      tooltipTop,
      tooltipDelay,
      tooltipHideOnClick,
      children,
      ...other
    } = this.props;

    const { visible } = this.state;

    const composedClass = cn(className, styles.container);
    const tooltipClass = cn(
      visible ? styles.visible : styles.hidden,
      tooltipTop ? styles.top : styles.bottom
    );

    return (
      <ComposedComponent className={composedClass} {...other}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}>
        {children}
        <span className={tooltipClass}>
          {tooltipText}
        </span>
      </ComposedComponent>
    );
  }
};

export default tooltip;
