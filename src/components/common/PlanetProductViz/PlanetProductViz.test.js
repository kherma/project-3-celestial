import React from 'react';
import PlanetProductViz from './PlanetProductViz';
import { shallow } from 'enzyme';

describe('Component PlanetProductViz', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PlanetProductViz />);
    expect(component).toBeTruthy();
  });
});
