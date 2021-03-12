import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../components/loading/Loading';

test('Componenet renders correctly', () => {
  const component = renderer.create(
    <Loading />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
