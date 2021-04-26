import React from 'react';
import WalkMan from './WalkMan';
import { shallow } from 'enzyme';

describe('Component WalkMan', () => {
  it('Should render without crashing', () => {
    const component = shallow(<WalkMan />);
    expect(component).toBeTruthy();
  });
});
