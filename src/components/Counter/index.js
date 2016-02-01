import { autobind } from 'core-decorators';
import React, { Component, PropTypes } from 'react';
import styleable from 'react-styleable';

import styles from './styles';

const { number, object, func } = PropTypes;

export class Counter extends Component {
  state = { count: this.props.count };

  static propTypes = {
    count: number,
    inc: func.isRequired,
    dec: func.isRequired,
    css: object.isRequired
  };

  static defaultProps = {
    count: 0
  };

  render() {
    const { css, inc, dec } = this.props;
    const { count } = this.state;

    return (
      <div className={css.counter}>
        <span className={css.value}>{count}</span>
        <button className={css.inc} onClick={inc}>+</button>
        <button className={css.dec} onClick={dec}>-</button>
      </div>
    );
  }
}

export default styleable(styles)(Counter);
