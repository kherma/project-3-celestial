import React from 'react';
import ArticlePaper from './ArticlePaper';
import { shallow } from 'enzyme';

describe('Component ArticlePaper', () => {
  it('Should render without crashing', () => {
    const component = shallow(<ArticlePaper />);
    expect(component).toBeTruthy();
  });
});
