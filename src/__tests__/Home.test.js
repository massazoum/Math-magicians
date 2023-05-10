import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../components/HomePage';
import renderer from 'react-test-renderer';

describe('Home component', () => {
  test('renders home page content', () => {
    render(<Home />);

    // Assert that the heading and paragraphs are rendered
    expect(screen.queryByText('Welcome to the home page')).toBeTruthy();
    expect(
      screen.getByText(
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae modi ratione in? Nobis explicabo cupiditate doloremque pariatur maxime ad, facere accusantium quam fuga tempore! Sequi, autem minima perferendis nulla labore expedita accusamus molestias?'
      )
    ).toBeTruthy();
    expect(
      screen.getByText(
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae modi ratione in? Nobis explicabo cupiditate doloremque pariatur maxime ad, facere accusantium quam fuga tempore! Sequi.'
      )
    ).toBeTruthy();
    // Assert the styling of the component
    const component = screen.getByTestId('home-component');
    expect(component).toHaveStyle('color: black');
    expect(component).toHaveStyle('font-size: 14px');
    expect(component).toHaveStyle('font-family: poppins, sans-serif');
  });
});

test('Homepage.js component renders correctly', () => {
 const component = renderer.create(<Home />);
 const tree = component.toJSON();
 expect(tree).toMatchSnapshot();
});