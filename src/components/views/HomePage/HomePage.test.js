import React from 'react';
import HomePage from './HomePage';
import { shallow } from 'enzyme';

describe('Component HomePage', () => {
  it('Should render without crashing', () => {
    const component = shallow(<HomePage />);
    expect(component).toBeTruthy();
  });
});
