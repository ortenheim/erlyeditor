import React, { PropTypes } from 'react';
import styleable from 'react-styleable';
import cn from 'classnames';

import Button from '../../../Button';
import styles from './styles';

const { bool, string, func, object, node } = PropTypes;

export const Options = (props) => {
  const {
    children,
    css,
    className,
    buttonClassName,
    buttonOnClassName,
    buttonOffClassName,
    repeat,
    onToggleRepeat,
    onToggleFullScreen
  } = props;

  const repeatButtonClass = cn(
    buttonClassName,
    repeat ? buttonOnClassName : buttonOffClassName,
    repeat ? css.buttonOn : css.buttonOff
  );
  const fullScreenButtonClass = cn(
    buttonClassName,
    css.buttonFullScreen
  );

  if (!onToggleRepeat && !onToggleFullScreen) return null;

  return (
    <div className={cn(className, css.options)}>
      <Button className={repeatButtonClass}
        icon='repeat'
        onClick={onToggleRepeat}
      />
      <Button className={fullScreenButtonClass}
        icon='fullscreen'
        onClick={onToggleFullScreen}
      />
      {children}
    </div>
  );
};


Options.propTypes = {
  children: node,
  css: object.isRequired,
  className: string,
  buttonClassName: string,
  buttonOnClassName: string,
  buttonOffClassName: string,

  repeat: bool.isRequired,
  onToggleRepeat: func,
  onToggleFullScreen: func
};

export default styleable(styles)(Options);
