import React from 'react';
import DashboardNavigation from './DashboardNavigation';
import { shallow } from 'enzyme';

describe('Component DashboardNavigation', () => {
  it('Should render without crashing', () => {
    const component = shallow(<DashboardNavigation />);
    expect(component).toBeTruthy();
  });
});
