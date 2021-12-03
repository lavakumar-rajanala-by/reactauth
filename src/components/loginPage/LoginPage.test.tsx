import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import LoginPage from './loginPage';

configure({ adapter: new Adapter() });

describe('Login Page', () => {
  let wrapper: any;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render Login Component', () => {
    wrapper = mount(
      <LoginPage
        login={() => {
          return;
        }}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
