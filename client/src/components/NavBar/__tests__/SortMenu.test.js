import React from 'react';
import renderer from 'react-test-renderer';
import SortMenu from '../SortMenu'

it('renders correctly', () => {
  const tree = renderer.create(<SortMenu />).toJSON();
  expect(tree).toMatchSnapshot();
});
