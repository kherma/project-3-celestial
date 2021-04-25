import React from 'react';
import Dashboard from './Dashboard';
import { shallow } from 'enzyme';

describe('Component Dashboard', () => {
  it('Should render without crashing', () => {
    const component = shallow(<Dashboard />);
    expect(component).toBeTruthy();
  });
});
