import React from 'react';
import renderer from 'react-test-renderer';
import IdeaTitle from '../IdeaTitle';

it('renders correctly', () => {
  const testIdea = {
    id: '123',
    title: 'Test Idea Title',
    body: 'Test Idea Body',
    created_date: 'Aug 2, 2019'
  };
  const tree = renderer.create(<IdeaTitle idea={testIdea}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
