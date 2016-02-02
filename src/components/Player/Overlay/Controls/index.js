import React, { PropTypes } from 'react';
import styleable from 'react-styleable';

import styles from './styles';

const { object } = PropTypes;

const Controls = (props) => {
  const { css } = props;

  return (
    <div className={css.controls}>
      controls
    </div>
  );
};


Controls.propTypes = {
  css: object
};

export default styleable(styles)(Controls);
