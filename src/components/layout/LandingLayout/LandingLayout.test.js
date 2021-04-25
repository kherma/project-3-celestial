import React from 'react';
import LandingLayout from './LandingLayout';
import { shallow } from 'enzyme';

describe('Component LandingLayout', () => {
  it('Should render without crashing', () => {
    const component = shallow(<LandingLayout />);
    expect(component).toBeTruthy();
  });
});
