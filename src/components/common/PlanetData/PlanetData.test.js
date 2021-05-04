import React from 'react';
import PlanetData from './PlanetData';
import { shallow } from 'enzyme';

describe('Component PlanetData', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PlanetData />);
    expect(component).toBeTruthy();
  });
});
