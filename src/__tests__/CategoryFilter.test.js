import React from 'react';
import renderer from 'react-test-renderer';
import CategoryFilter from '../components/categoryFilter/CategoryFilter';

const categories = [
  {
    strCategory: 'Category',
  },
  {
    strCategory: 'Category1',
  },
];

const handleChange = () => {};
test('Componenet renders correctly', () => {
  const component = renderer.create(
    <CategoryFilter categories={categories} handleChange={handleChange} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
