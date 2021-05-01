import React from 'react';
import PersonaAside from './PersonaAside';
import { shallow } from 'enzyme';

describe('Component PersonaAside', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PersonaAside />);
    expect(component).toBeTruthy();
  });
});
