import React from 'react';
import PlanetProductDistance from './PlanetProductDistance';
import { shallow } from 'enzyme';

describe('Component PlanetProductDistance', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PlanetProductDistance />);
    expect(component).toBeTruthy();
  });
});
