import React from 'react';
import SizeComparison from './SizeComparison';
import { shallow } from 'enzyme';

describe('Component SizeComparison', () => {
  it('Should render without crashing', () => {
    const component = shallow(<SizeComparison />);
    expect(component).toBeTruthy();
  });
});
