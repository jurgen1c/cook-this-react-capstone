import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../pages/Main';

test('Componenet renders correctly', () => {
  const component = renderer.create(
    <Main />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});