import React from 'react';
import renderer from 'react-test-renderer';
import IdeaDateCreated from '../IdeaDateCreated';

it('renders correctly', () => {
  const tree = renderer.create(<IdeaDateCreated />).toJSON();
  expect(tree).toMatchSnapshot();
});
