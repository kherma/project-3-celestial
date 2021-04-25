import React from 'react';
import DashboardLayout from './DashboardLayout';
import { shallow } from 'enzyme';

describe('Component DashboardLayout', () => {
  it('Should render without crashing', () => {
    const component = shallow(<DashboardLayout />);
    expect(component).toBeTruthy();
  });
});
