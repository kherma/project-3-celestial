import React from 'react';
import { CreateProfile } from './CreateProfile';
import { shallow } from 'enzyme';

describe('Component CreateProfile', () => {
  it('Should render without crashing', () => {
    const component = shallow(<CreateProfile />);
    expect(component).toBeTruthy();
  });
});
