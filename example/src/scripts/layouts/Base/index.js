import React, { Component, PropTypes } from 'react';
import css from 'react-css-modules';

import 'styles/main';
import styles from './styles';

const { node } = PropTypes;

class Base extends Component {
  static propTypes = {
    children: node
  };

  render() {
    const { children } = this.props;

    return (
      <div styleName='main'>
        <section styleName='page'>
          {children}
        </section>
      </div>
    );
  }
}

export default css(Base, styles);
