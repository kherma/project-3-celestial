import React from 'react';
import PlanetView from './PlanetView';
import { shallow } from 'enzyme';

describe('Component PlanetView', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PlanetView />);
    expect(component).toBeTruthy();
  });
});
