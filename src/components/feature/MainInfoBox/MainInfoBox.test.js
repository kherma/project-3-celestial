import React from 'react';
import MainInfoBox from './MainInfoBox';
import { shallow } from 'enzyme';

describe('Component MainInfoBox', () => {
  it('Should render without crashing', () => {
    const component = shallow(<MainInfoBox />);
    expect(component).toBeTruthy();
  });
});
