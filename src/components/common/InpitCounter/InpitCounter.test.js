import React from 'react';
import InpitCounter from './InpitCounter';
import { shallow } from 'enzyme';

describe('Component InpitCounter', () => {
  it('Should render without crashing', () => {
    const component = shallow(<InpitCounter />);
    expect(component).toBeTruthy();
  });
});
