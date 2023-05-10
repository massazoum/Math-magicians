import React from 'react';
import renderer from 'react-test-renderer';
import Affiche from '../components/ZoumCalculator';

test('renders Affiche component correctly', () => {
  const tree = renderer
    .create(<Affiche />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
