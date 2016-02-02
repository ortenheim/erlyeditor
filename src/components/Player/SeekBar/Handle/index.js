import React, { PropTypes } from 'react';
import styleable from 'react-styleable';

import styles from './styles';

const { object } = PropTypes;

const Handle = (props) => {
  const { css } = props;

  return (
    <div className={css.handle}>
      handle
    </div>
  );
};


Handle.propTypes = {
  css: object
};

export default styleable(styles)(Handle);
