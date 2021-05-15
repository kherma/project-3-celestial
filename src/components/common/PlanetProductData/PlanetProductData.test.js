import React from 'react';
import PlanetProductData from './PlanetProductData';
import { shallow } from 'enzyme';

describe('Component PlanetProductData', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PlanetProductData />);
    expect(component).toBeTruthy();
  });
});
