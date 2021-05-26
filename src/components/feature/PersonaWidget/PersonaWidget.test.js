import React from 'react';
import PersonaWidget from './PersonaWidget';
import { shallow } from 'enzyme';

describe('Component PersonaWidget', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PersonaWidget />);
    expect(component).toBeTruthy();
  });
});
