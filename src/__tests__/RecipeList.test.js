import React from 'react';
import renderer from 'react-test-renderer';
import RecipeList from '../components/recipeList/RecipeList';

test('Componenet renders correctly', () => {
  const component = renderer.create(
    <RecipeList />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});