import React from 'react';
import TshirtCart from './TshirtCart';
import { shallow } from 'enzyme';

describe('Component TshirtCart', () => {
  it('Should render without crashing', () => {
    const component = shallow(<TshirtCart />);
    expect(component).toBeTruthy();
  });
});
