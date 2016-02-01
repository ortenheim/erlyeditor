import styleable from 'react-styleable';
import React, { Component } from 'react';

import styles from './styles';

@styleable(styles)
export default class Dummy extends Component {
  render() {
    return (
      <div className={this.props.css.dummy}>
        <h1>{'SUP DAWG'}</h1>
      </div>
    );
  }
}
