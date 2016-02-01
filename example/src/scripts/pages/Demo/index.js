import React, { Component } from 'react';
import css from 'react-css-modules';
import { Counter } from 'erlyeditor';

import styles from './styles';
import counterStyles from './counter';

export class Demo extends Component {
  render() {
    return (
      <div styleName='root'>
        <h1>{'Demo page'}</h1>
        <Counter css={counterStyles} count={2} />
      </div>
    );
  }
}

export default css(Demo, styles);
