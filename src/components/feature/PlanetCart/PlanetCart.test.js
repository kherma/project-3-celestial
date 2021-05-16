import React from 'react';
import PlanetCart from './PlanetCart';
import { shallow } from 'enzyme';

describe('Component PlanetCart', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PlanetCart />);
    expect(component).toBeTruthy();
  });
});
