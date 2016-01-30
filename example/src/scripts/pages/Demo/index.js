import React, { Component } from 'react';
import css from 'react-css-modules';
import { Counter } from 'erlyeditor';

import styles from './styles';

export class Demo extends Component {
  render() {
    return (
      <div styleName='root'>
        <h1>{'Demo page'}</h1>
        <Counter count={2} />
      </div>
    );
  }
}

export default css(Demo, styles);
