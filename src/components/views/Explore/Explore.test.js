import React from 'react';
import { Explore } from './Explore';
import { shallow } from 'enzyme';

describe('Component Explore', () => {
  it('Should render without crashing', () => {
    const component = shallow(<Explore />);
    expect(component).toBeTruthy();
  });
});
