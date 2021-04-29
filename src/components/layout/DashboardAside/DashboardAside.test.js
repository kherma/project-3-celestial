import React from 'react';
import DashboardAside from './DashboardAside';
import { shallow } from 'enzyme';

describe('Component DashboardAside', () => {
  it('Should render without crashing', () => {
    const component = shallow(<DashboardAside />);
    expect(component).toBeTruthy();
  });
});
