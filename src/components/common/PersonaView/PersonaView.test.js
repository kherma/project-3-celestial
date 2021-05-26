import React from 'react';
import PersonaView from './PersonaView';
import { shallow } from 'enzyme';

describe('Component PersonaView', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PersonaView />);
    expect(component).toBeTruthy();
  });
});
