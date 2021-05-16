import React from 'react';
import SubmitCart from './SubmitCart';
import { shallow } from 'enzyme';

describe('Component SubmitCart', () => {
  it('Should render without crashing', () => {
    const component = shallow(<SubmitCart />);
    expect(component).toBeTruthy();
  });
});
