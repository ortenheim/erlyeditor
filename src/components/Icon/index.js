import React, { PropTypes } from 'react';
import styleable from 'react-styleable';
import cn from 'classnames';

import styles from './styles';

const { string, object, any } = PropTypes;

export const Icon = (props) => {
  const {
    children,
    css,
    className,
    value,
    ...other
  } = props;

  return (
    <span className={cn(className, css.icon)} {...other}>
      {value}
      {children}
    </span>
  );
};

Icon.propTypes = {
  children: any,
  css: object.isRequired,
  className: string,
  value: string.isRequired
};

export default styleable(styles)(Icon);
