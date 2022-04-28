/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { NavBar } from './NavBar';

describe(('Test component NavBar'), () => {
  test('render component NavBar', () => {
    let navbar;
    act(() => {
      navbar = create(
        <Router>
          <NavBar />
        </Router>,
      );
      expect(navbar.toJSON()).toMatchSnapshot();
    });
  });

  test('create a element dom', () => {
    const testRender = create(
      <Router>
        <NavBar />
      </Router>,
    );
    const testInstance = testRender.root;
    expect(testInstance.findByProps({ className: 'titleApp' }).children).toEqual(['BlogSks']);
  });

  const mockOnClick = jest.fn();

  test('value when clicked button Login', () => {
    const componentNav = render(
      <Router>
        <NavBar onClickButton={mockOnClick} />
      </Router>,
    );

    const button = componentNav.getByText('LOGIN');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
  test('value when clicked button Register', () => {
    const componentNav = render(
      <Router>
        <NavBar onClickButton={mockOnClick} />
      </Router>,
    );

    const button = componentNav.getByText('REGISTER');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
