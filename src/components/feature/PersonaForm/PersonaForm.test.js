import React from 'react';
import PersonaForm from './PersonaForm';
import { shallow } from 'enzyme';

describe('Component PersonaForm', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PersonaForm />);
    expect(component).toBeTruthy();
  });
});
