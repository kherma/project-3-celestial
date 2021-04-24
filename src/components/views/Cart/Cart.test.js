import React from 'react';
import { Cart } from './Cart';
import { shallow } from 'enzyme';

describe('Component Cart', () => {
  it('Should render without crashing', () => {
    const component = shallow(<Cart />);
    expect(component).toBeTruthy();
  });
});
