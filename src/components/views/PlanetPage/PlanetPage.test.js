import React from 'react';
import PlanetPage from './PlanetPage';
import { shallow } from 'enzyme';

describe('Component PlanetPage', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PlanetPage />);
    expect(component).toBeTruthy();
  });
});
