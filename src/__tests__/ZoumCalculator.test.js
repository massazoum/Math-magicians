import React from "react";
// import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Affiche from '../components/ZoumCalculator';
import renderer from 'react-test-renderer';

test('renders Affiche component correctly', () => {
 const component = renderer.create(<Affiche />);
 const tree = component.toJSON();
 expect(tree).toMatchSnapshot();
});
