import React from 'react';
import CelestialLogo from './CelestialLogo';
import { shallow } from 'enzyme';

describe('Component CelestialLogo', () => {
  it('Should render without crashing', () => {
    const component = shallow(<CelestialLogo />);
    expect(component).toBeTruthy();
  });
});
