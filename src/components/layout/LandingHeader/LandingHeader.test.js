import React from 'react';
import LandingHeader from './LandingHeader';
import { shallow } from 'enzyme';

describe('Component LandingHeader', () => {
  it('Should render without crashing', () => {
    const component = shallow(<LandingHeader />);
    expect(component).toBeTruthy();
  });
});
