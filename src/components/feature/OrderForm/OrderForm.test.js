import React from 'react';
import OrderForm from './OrderForm';
import { shallow } from 'enzyme';

describe('Component OrderForm', () => {
  it('Should render without crashing', () => {
    const component = shallow(<OrderForm />);
    expect(component).toBeTruthy();
  });
});
