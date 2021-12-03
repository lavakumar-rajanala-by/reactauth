/* eslint-disable @typescript-eslint/no-empty-function */
import 'regenerator-runtime/runtime';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import 'jest-canvas-mock';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
  
jest.setTimeout(30000);

configure({ adapter: new Adapter() });
