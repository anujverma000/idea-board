import React from 'react';
import renderer from 'react-test-renderer';
import AddIdeaAction from '../AddIdeaAction'
import mockStore from "../../../__mocks__/mockStore";
import { Provider } from "react-redux";

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={mockStore}><AddIdeaAction /></Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
