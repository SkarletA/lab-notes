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
    const testRender = create(
      <Router>
        <NavBarBlog />
      </Router>,
    );

    const testInstance = testRender.root;
    const e = { preventDefault: () => {} };
    jest.spyOn(e, 'preventDefault');
    // const e = jest.fn();
    const button = testInstance.findByType('button');
    // act(() => {
    //   button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    // });
    button.props.onClick();

    expect(e).toHaveBeenCalledTimes(1);
    expect(button.props.children).toBe('function');
    // expect(e).toBeCalled();
  });
});
