/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { NavBarBlog } from './NavBarBlog';

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
  test('value when clicked', () => {
    const render = create(
      <Router>
        <NavBarBlog />
      </Router>,
    );

    const testInstance = render.root;
    const button = testInstance.findByType('button');
    button.props.onClick();
    // const a = button.props.onClick();
    // expect(a).toHaveBeenCalledTimes(1);
    // expect(testInstance.findByType('button').children).toEqual(['LogOut']);
  });
});
