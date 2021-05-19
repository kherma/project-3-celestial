import React from 'react';
import InputRadioDelivery from './InputRadioDelivery';
import { shallow } from 'enzyme';

describe('Component InputRadioDelivery', () => {
  it('Should render without crashing', () => {
    const component = shallow(<InputRadioDelivery />);
    expect(component).toBeTruthy();
  });
});
