import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from '../components/listItem/ListItem';

test('Componenet renders correctly', () => {
  const component = renderer.create(
    <ListItem />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});