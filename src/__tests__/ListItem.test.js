import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ListItem from '../components/listItem/ListItem';

const meal = {
  idMeal: '1',
  strMeal: 'Meal',
  strMealThumb: 'mealIamageUrl',
};

const dispatch = () => {};

test('Componenet renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <ListItem meal={meal} dispatch={dispatch} />
      ,
    </MemoryRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
