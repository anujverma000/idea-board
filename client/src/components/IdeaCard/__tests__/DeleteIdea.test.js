import React from 'react';
import renderer from 'react-test-renderer';
import DeleteIdea from '../DeleteIdea'
import mockStore from "../../../__mocks__/mockStore";
import { Provider } from "react-redux";

it('renders correctly', () => {
  const tree = renderer.create(
      <Provider store={mockStore}><DeleteIdea /></Provider>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
