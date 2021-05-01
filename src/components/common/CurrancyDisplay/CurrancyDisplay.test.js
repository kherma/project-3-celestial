import React from 'react';
import CurrancyDisplay from './CurrancyDisplay';
import { shallow } from 'enzyme';

describe('Component CurrancyDisplay', () => {
  it('Should render without crashing', () => {
    const component = shallow(<CurrancyDisplay />);
    expect(component).toBeTruthy();
  });
});
