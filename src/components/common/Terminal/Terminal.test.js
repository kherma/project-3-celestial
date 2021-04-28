import React from 'react';
import Terminal from './Terminal';
import { shallow } from 'enzyme';

describe('Component Terminal', () => {
  it('Should render without crashing', () => {
    const component = shallow(<Terminal />);
    expect(component).toBeTruthy();
  });
});
