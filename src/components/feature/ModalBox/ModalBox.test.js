import React from 'react';
import ModalBox from './ModalBox';
import { shallow } from 'enzyme';

describe('Component ModalBox', () => {
  it('Should render without crashing', () => {
    const component = shallow(<ModalBox />);
    expect(component).toBeTruthy();
  });
});
