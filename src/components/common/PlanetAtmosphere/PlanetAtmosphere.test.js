import React from 'react';
import PlanetAtmosphere from './PlanetAtmosphere';
import { shallow } from 'enzyme';

describe('Component PlanetAtmosphere', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PlanetAtmosphere />);
    expect(component).toBeTruthy();
  });
});
