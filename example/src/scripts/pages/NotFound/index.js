import React from 'react';
import css from 'react-css-modules';

import styles from './styles';

export const NotFound = () => (
  <div styleName='page'>
    <h1 styleName='title'>{'404'}</h1>
  </div>
);

export default css(NotFound, styles);
