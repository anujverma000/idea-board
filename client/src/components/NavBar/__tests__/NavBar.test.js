import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from '../NavBar'
import mockStore from "../../../__mocks__/mockStore";
import { Provider } from "react-redux";

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={mockStore}><NavBar /></Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
