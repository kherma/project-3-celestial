import React from 'react';
import TshirtForm from './TshirtForm';
import { shallow } from 'enzyme';

describe('Component TshirtForm', () => {
  it('Should render without crashing', () => {
    const component = shallow(<TshirtForm />);
    expect(component).toBeTruthy();
  });
});
