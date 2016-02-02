import React, { PropTypes } from 'react';
import styleable from 'react-styleable';
import cn from 'classnames';

import Icon from '../Icon';
import styles from './styles';

const { bool, string, object, node } = PropTypes;

export const Button = (props) => {
  const {
    children,
    css,
    className,
    iconClassName,
    labelClassName,
    label,
    icon,
    disabled,
    neutral,
    rounded,
    small,
    big,
    ...other
  } = props;

  const shape = rounded ? css.rounded : neutral ? css.neutral : css.squared;
  const size = small ? css.small : big ? css.big : css.normal;

  const rootClass = cn(
    className,
    disabled ? css.disabled : css.enabled,
    shape, size
  );

  return (
    <button className={rootClass} disabled={disabled} {...other}>
      {icon && <Icon className={cn(iconClassName, css.icon)} value={icon} />}
      {label && <span className={cn(labelClassName, css.label)}>{label}</span>}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: node,
  css: object.isRequired,
  className: string,
  iconClassName: string,
  labelClassName: string,

  label: string,
  icon: string,
  disabled: bool,
  neutral: bool,
  rounded: bool,
  small: bool,
  big: bool
};

Button.defaultProps = {
  disabled: false,
  neutral: true,
  rounded: false,
  small: false,
  big: false
};

export default styleable(styles)(Button);
