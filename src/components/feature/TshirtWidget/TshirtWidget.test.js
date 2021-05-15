import React from 'react';
import TshirtWidget from './TshirtWidget';
import { shallow } from 'enzyme';

describe('Component TshirtWidget', () => {
  it('Should render without crashing', () => {
    const component = shallow(<TshirtWidget />);
    expect(component).toBeTruthy();
  });
});
