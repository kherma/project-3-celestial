import React from 'react';
import TopbarDesktop from './TopbarDesktop';
import { shallow } from 'enzyme';

describe('Component TopbarDesktop', () => {
  it('Should render without crashing', () => {
    const component = shallow(<TopbarDesktop />);
    expect(component).toBeTruthy();
  });
});
