import React from 'react';
import Discover from './Discover';
import { shallow } from 'enzyme';

describe('Component Discover', () => {
  it('Should render without crashing', () => {
    const component = shallow(<Discover />);
    expect(component).toBeTruthy();
  });
});
