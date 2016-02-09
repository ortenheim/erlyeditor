import React, { PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import Icon from '../Icon';
import styles from './styles';

const { bool, string, func, node } = PropTypes;

export const Button = (props) => {
  const {
    children,
    className,
    iconClassName,
    labelClassName,
    label,
    icon,
    disabled,
    filled,
    circle,
    rounded,
    small,
    big,
    ...other
  } = props;

  const shape = circle ? 'circle' : rounded ? 'rounded' : 'squared';
  const size = small ? 'small' : big ? 'big' : 'normal';
  const state = disabled ? 'disabled' : 'enabled';
  const fill = filled ? 'filled' : 'neutral';

  const styleName = cn('button', state, fill, shape, size);
  const known = { styleName, className, disabled };

  return (
    <button { ...{ ...known, ...other } } styles={undefined}>
      {icon &&
        <Icon className={cn(iconClassName, styles.icon)}
          { ...{ small, big } }
          value={icon}
        />
      }
      {label &&
        <span className={labelClassName}
          styleName='label'>
          {label}
        </span>
      }
      {children}
    </button>
  );
};

Button.propTypes = {
  children: node,
  className: string,
  iconClassName: string,
  labelClassName: string,

  label: string,
  icon: string,
  disabled: bool,
  filled: bool,
  circle: bool,
  rounded: bool,
  small: bool,
  big: bool
};

Button.defaultProps = {
  disabled: false,
  filled: false,
  circle: false,
  rounded: false,
  small: false,
  big: false
};

export default css(Button, styles, { allowMultiple: true });
