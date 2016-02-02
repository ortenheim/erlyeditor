import React, { PropTypes } from 'react';
import styleable from 'react-styleable';

import styles from './styles';

const { bool, object, node } = PropTypes;

const Overlay = (props) => {
  const { css, children, playing } = props;

  return (
    <div className={css.overlay}>
      {children}
    </div>
  );
};


Overlay.propTypes = {
  css: object.isRequired,
  children: node.isRequired,
  playing: bool.isRequired
};

export default styleable(styles)(Overlay);
