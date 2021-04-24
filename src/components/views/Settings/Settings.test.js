import React from 'react';
import { Settings } from './Settings';
import { shallow } from 'enzyme';

describe('Component Settings', () => {
  it('Should render without crashing', () => {
    const component = shallow(<Settings />);
    expect(component).toBeTruthy();
  });
});
