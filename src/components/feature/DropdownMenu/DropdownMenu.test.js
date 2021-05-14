import React from 'react';
import DropdownMenu from './DropdownMenu';
import { shallow } from 'enzyme';

describe('Component DropdownMenu', () => {
  it('Should render without crashing', () => {
    const component = shallow(<DropdownMenu />);
    expect(component).toBeTruthy();
  });
});
