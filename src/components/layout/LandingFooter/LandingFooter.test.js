import React from 'react';
import LandingFooter from './LandingFooter';
import { shallow } from 'enzyme';

describe('Component LandingFooter', () => {
  it('Should render without crashing', () => {
    const component = shallow(<LandingFooter />);
    expect(component).toBeTruthy();
  });
});
