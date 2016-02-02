import React, { PropTypes } from 'react';
import styleable from 'react-styleable';

import styles from './styles';

const { object } = PropTypes;

export const Info = (props) => {
  const { css } = props;

  return (
    <div className={css.info}>
    </div>
  );
};


Info.propTypes = {
  css: object.isRequired
};

export default styleable(styles)(Info);
