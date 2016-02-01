import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import Dummy from 'components/Dummy';

describe('dummy', () => {
  beforeEach(() => {
    const wrapper = shallow(
      <Dummy  />
    );
  });

  it ('runs fast', () => {
    assert.equal(1 + 1, 2);
  });
});
