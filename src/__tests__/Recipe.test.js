import React from 'react';
import renderer from 'react-test-renderer';
import Recipe from '../pages/Recipe';

test('Componenet renders correctly', () => {
  const component = renderer.create(
    <Recipe />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});