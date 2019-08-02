import React from 'react';
import renderer from 'react-test-renderer';
import SortOption from '../SortOption'

it('renders correctly', () => {
  const tree = renderer.create(<SortOption />).toJSON();
  expect(tree).toMatchSnapshot();
});
