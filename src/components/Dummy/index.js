import css from 'react-css-modules';
import React, { Component } from 'react';

import styles from './styles';

@css(styles)
export default class Dummy extends Component {
  render() {
    return (
      <div styleName='dummy'>
        <h1>{'SUP DAWG'}</h1>
      </div>
    );
  }
}
