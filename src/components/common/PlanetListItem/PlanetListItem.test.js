import React from 'react';
import PlanetListItem from './PlanetListItem';
import { shallow } from 'enzyme';

describe('Component PlanetListItem', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PlanetListItem />);
    expect(component).toBeTruthy();
  });
});
