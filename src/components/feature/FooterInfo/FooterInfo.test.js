import React from 'react';
import FooterInfo from './FooterInfo';
import { shallow } from 'enzyme';

describe('Component FooterInfo', () => {
  it('Should render without crashing', () => {
    const component = shallow(<FooterInfo />);
    expect(component).toBeTruthy();
  });
});
