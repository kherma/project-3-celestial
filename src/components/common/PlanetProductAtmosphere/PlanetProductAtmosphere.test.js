import React from 'react';
import PlanetProductAtmosphere from './PlanetProductAtmosphere';
import { shallow } from 'enzyme';

describe('Component PlanetProductAtmosphere', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PlanetProductAtmosphere />);
    expect(component).toBeTruthy();
  });
});
