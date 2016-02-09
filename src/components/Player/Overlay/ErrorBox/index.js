import React from 'react';
import css from 'react-css-modules';

import { videoStateType } from '../../../propTypes';
import styles from './styles';

export const ErrorBox = ({ code, title, body }) => (
  <div styleName='error-box'>
    <dl>
      <dt styleName='title'>
        <strong styleName='code'>
          {code}
        </strong>
        {title}
      </dt>
      <dd styleName='body'>{body}</dd>
    </dl>
  </div>
);

ErrorBox.propTypes = videoStateType;

export default css(ErrorBox, styles);
