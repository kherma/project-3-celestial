import React from 'react';
import LoginBox from './LoginBox';
import { shallow } from 'enzyme';

describe('Component LoginBox', () => {
  it('Should render without crashing', () => {
    const component = shallow(<LoginBox />);
    expect(component).toBeTruthy();
  });
});
