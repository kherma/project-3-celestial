import React from 'react';
import DashboardHeader from './DashboardHeader';
import { shallow } from 'enzyme';

describe('Component DashboardHeader', () => {
  it('Should render without crashing', () => {
    const component = shallow(<DashboardHeader />);
    expect(component).toBeTruthy();
  });
});
