import React from 'react';
import { NotFound } from './NotFound';
import { shallow } from 'enzyme';

describe('Component NotFound', () => {
  it('Should render without crashing', () => {
    const component = shallow(<NotFound />);
    expect(component).toBeTruthy();
  });
});
