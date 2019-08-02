import React from 'react';
import renderer from 'react-test-renderer';
import { ToastProvider } from "../index";

it('renders correctly', () => {
  const tree = renderer.create(
      <ToastProvider></ToastProvider>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
