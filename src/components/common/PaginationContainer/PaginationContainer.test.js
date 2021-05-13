import React from 'react';
import PaginationContainer from './PaginationContainer';
import { shallow } from 'enzyme';

describe('Component PaginationContainer', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PaginationContainer />);
    expect(component).toBeTruthy();
  });
});
