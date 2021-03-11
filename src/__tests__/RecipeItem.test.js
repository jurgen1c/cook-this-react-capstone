import React from 'react';
import renderer from 'react-test-renderer';
import RecipeItem from '../components/recipe/RecipeItem';

test('Componenet renders correctly', () => {
  const component = renderer.create(
    <RecipeItem />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});