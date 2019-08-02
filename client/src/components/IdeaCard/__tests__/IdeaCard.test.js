import React from 'react';
import renderer from 'react-test-renderer';
import IdeaCard from '../IdeaCard';
import mockStore from "../../../__mocks__/mockStore";
import { ToastProvider } from "../../ToastManager";
import { Provider } from "react-redux";

it('renders correctly', () => {

  const testIdea = {
    id: '123',
    title: 'Test Idea Title',
    body: 'Test Idea Body',
    created_date: 'Aug 2, 2019'
  };

  
  const tree = renderer.create(
      <Provider store={mockStore}>
        <ToastProvider>
          <IdeaCard idea={testIdea}/>
        </ToastProvider>
      </Provider>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
