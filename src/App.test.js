import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find("[data-test='component-app']"); // find the data-test attribute on app
    expect(appComponent.length).toBe(1); // expect an result equal to 1 to success, another result will throw a new error
});

test('renders increment button', () => {
  
});

test('renders counter display', () => {
  
});

test('counter display starts at 0', () => {
  
});

test('clicking button increments the counter', () => {
  
});