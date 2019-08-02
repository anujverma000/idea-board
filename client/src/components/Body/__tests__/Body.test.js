import React from 'react';
import renderer from 'react-test-renderer';
import Body from '../Body'
import mockStore from "../../../__mocks__/mockStore";
import { Provider } from "react-redux";

it('renders correctly', () => {
  const tree = renderer.create(
      <Provider store={mockStore}><Body /></Provider>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
