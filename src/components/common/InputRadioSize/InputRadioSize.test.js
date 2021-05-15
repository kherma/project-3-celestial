import React from 'react';
import InputRadioSize from './InputRadioSize';
import { shallow } from 'enzyme';

describe('Component InputRadioSize', () => {
  it('Should render without crashing', () => {
    const component = shallow(<InputRadioSize />);
    expect(component).toBeTruthy();
  });
});
