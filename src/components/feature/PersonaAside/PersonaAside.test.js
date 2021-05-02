import React from 'react';
import PersonaAside from './PersonaAside';
import { shallow } from 'enzyme';

describe('Component PersonaAside', () => {
  beforeEach(() => {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });
  });
  it('Should render without crashing', () => {
    const component = shallow(<PersonaAside />);
    expect(component).toBeTruthy();
  });
});
