import React from 'react';
import { spy } from 'sinon';
import { shallow } from 'enzyme';

import { Counter } from 'components/Counter';

describe('<Counter />', () => {
  const initialState = 3;

  let actions;
  let wrapper;

  beforeEach(() => {
    actions = {
      inc: spy(),
      dec: spy()
    };

    wrapper = shallow(
      <Counter count={initialState} {...actions } />
    );
  });

  it('renders correclty', () => {
    const span = wrapper.find('span');
    const buttons = wrapper.find('button');

    expect(span.text()).to.equal(initialState.toString());
    expect(buttons).to.have.length(2);
  });

  it('attaches event handlers', () => {
    const buttons = wrapper.find('button');
    buttons.forEach(b => b.simulate('click'));

    expect(actions.inc).to.have.been.calledOnce
    expect(actions.dec).to.have.been.calledOnce
  });
});
