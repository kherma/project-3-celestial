import React from 'react';
import TopbarMobile from './TopbarMobile';
import { shallow } from 'enzyme';

describe('Component TopbarMobile', () => {
  it('Should render without crashing', () => {
    const component = shallow(<TopbarMobile />);
    expect(component).toBeTruthy();
  });
});
