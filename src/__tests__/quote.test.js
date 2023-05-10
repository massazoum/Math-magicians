import React from 'react';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import DisplayQuote from '../components/quote';

test('DisplayQuote component renders correctly', () => {
  act(() => {
    const tree = renderer
      .create(<DisplayQuote />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
