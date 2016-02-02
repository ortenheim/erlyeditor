import React, { PropTypes } from 'react';
import styleable from 'react-styleable';

import styles from './styles';

const { object } = PropTypes;

export const HUD = (props) => {
  const { css } = props;

  return (
    <div className={css.hud}>
    </div>
  );
};


HUD.propTypes = {
  css: object.isRequired
};

export default styleable(styles)(HUD);
