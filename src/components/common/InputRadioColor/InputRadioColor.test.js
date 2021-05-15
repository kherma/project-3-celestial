import React from 'react';
import InputRadioColor from './InputRadioColor';
import { shallow } from 'enzyme';

describe('Component InputRadioColor', () => {
  it('Should render without crashing', () => {
    const component = shallow(<InputRadioColor />);
    expect(component).toBeTruthy();
  });
});
