import React from 'react';
import { MainLayout } from './MainLayout';
import { shallow } from 'enzyme';

describe('Component MainLayout', () => {
  it('Should render without crashing', () => {
    const component = shallow(<MainLayout />);
    expect(component).toBeTruthy();
  });
});
