import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../components/navbar/Navbar';

test('Componenet renders correctly', () => {
  const component = renderer.create(
    <Navbar />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});