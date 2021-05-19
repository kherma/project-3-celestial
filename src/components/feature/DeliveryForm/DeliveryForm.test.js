import React from 'react';
import DeliveryForm from './DeliveryForm';
import { shallow } from 'enzyme';

describe('Component DeliveryForm', () => {
  it('Should render without crashing', () => {
    const component = shallow(<DeliveryForm />);
    expect(component).toBeTruthy();
  });
});
