import React from 'react';
import {{pascalCase name}} from './{{pascalCase name}}';
import { shallow } from 'enzyme';

describe('Component {{pascalCase name}}', () => {
  it('Should render without crashing', () => {
    const component = shallow(<{{pascalCase name}} />);
    expect(component).toBeTruthy();
  });
});
