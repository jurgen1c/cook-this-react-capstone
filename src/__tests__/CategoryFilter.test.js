import React from 'react';
import renderer from 'react-test-renderer';
import CategoryFilter from '../components/categoryFilter/CategoryFilter';

test('Componenet renders correctly', () => {
  const component = renderer.create(
    <CategoryFilter />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});