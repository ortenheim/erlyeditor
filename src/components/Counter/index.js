import { autobind } from 'core-decorators';
import React, { Component, PropTypes } from 'react';
import css from 'react-css-modules';

import styles from './styles';

export class Counter extends Component {
  state = { count: this.props.count };

  static propTypes = {
    count: PropTypes.number
  };

  static defaultProps = {
    count: 0
  };

  @autobind
  handleInc() {
    this.setState({ count: this.state.count + 1 });
  }

  @autobind
  handleDec() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    const { inc, dec } = this.props;
    const { count } = this.state;

    return (
      <div styleName='counter'>
        <span styleName='value'>{count}</span>
        <button styleName='dec' onClick={this.handleInc}>+</button>
        <button styleName='inc' onClick={this.handleDec}>-</button>
      </div>
    );
  }
}

export default css(Counter, styles);
