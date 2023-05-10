import React from "react";
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer';
import DisplayQuote from '../components/quote';

test('DisplayQuote component renders correctly', () => {
 const component = renderer.create(<DisplayQuote />);
 const tree = component.toJSON();
 expect(tree).toMatchSnapshot();
});

