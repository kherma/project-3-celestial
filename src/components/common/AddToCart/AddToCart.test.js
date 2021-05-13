import React from 'react';
import AddToCart from './AddToCart';
import { shallow } from 'enzyme';

describe('Component AddToCart', () => {
  it('Should render without crashing', () => {
    const component = shallow(<AddToCart />);
    expect(component).toBeTruthy();
  });
});
