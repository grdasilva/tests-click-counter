import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });
/**
 * @function setup
 * @returns {ShallowWrapper}
 * 
*/
const setup = () => shallow(<App />); 

/**
 * @function findByTestAttr
 * @returns {ComponentThatHaveAttribute}
 * @description find the data-test attribute on app
*/
const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test='${value}']`)

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1); // expect an result equal to 1 to success, another result will throw a new error
});

test("renders increment button", () => {
  const wrapper = setup();  
  const button = findByTestAttr(wrapper, "increment-btn");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter display starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text(); // .text() returns an string
  expect(count).toBe("0");
});

test("clicking button increments the counter", () => {
  const wrapper = setup();
  
  // find the button
  const button = findByTestAttr(wrapper, "increment-btn");

  // click the button
  button.simulate('click'); // .simulate() makes an simulation of an event

  // find the display, and test that number has been incremented
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});
