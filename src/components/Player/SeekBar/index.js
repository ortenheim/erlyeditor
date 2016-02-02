import React, { Component, PropTypes } from 'react';
import styleable from 'react-styleable';

import Handle from './Handle';
import styles from './styles';

const { object } = PropTypes;

class SeekBar extends Component {
  static propTypes = {
    css: object
  };

  render() {
    const { css } = this.props;

    return (
      <div className={css.seekBar}>
        seekbar
        <Handle />
      </div>
    );
  }
}

export default styleable(styles)(SeekBar);
