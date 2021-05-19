import React from 'react';
import OrderPage from './OrderPage';
import { shallow } from 'enzyme';

describe('Component OrderPage', () => {
  it('Should render without crashing', () => {
    const component = shallow(<OrderPage />);
    expect(component).toBeTruthy();
  });
});
