/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBarBlog from './NavBarBlog';

describe(('Test component NavBarBlog'), () => {
  test('render component NavBarBlog', () => {
    let navbarBlog;
    act(() => {
      navbarBlog = create(
        <Router>
          <NavBarBlog />
        </Router>,
      );
      expect(navbarBlog.toJSON()).toMatchSnapshot();
    });
  });

  test('create a element dom', () => {
    const testRender = create(
      <Router>
        <NavBarBlog />
      </Router>,
    );
    const testInstance = testRender.root;
    expect(testInstance.findByProps({ className: 'titleApp' }).children).toEqual(['BlogSks']);
  });

  const mockOnClick = jest.fn();

  test('value when clicked', () => {
    const componentNav = render(
      <Router>
        <NavBarBlog onClickButton={mockOnClick} />
      </Router>,
    );

    const button = componentNav.getByText('LogOut');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
