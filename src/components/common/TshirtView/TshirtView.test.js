import React from 'react';
import TshirtView from './TshirtView';
import { shallow } from 'enzyme';

describe('Component TshirtView', () => {
  it('Should render without crashing', () => {
    const component = shallow(<TshirtView />);
    expect(component).toBeTruthy();
  });
});
