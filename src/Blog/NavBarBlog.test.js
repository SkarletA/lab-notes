/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act, TestRenderer } from 'react-test-renderer';
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
  // test('create a element dom', () => {
  //   function TestNavBarBlog() {
  //     return (
  //       <nav>
  //         <h1 className="titleApp">Blog</h1>
  //       </nav>
  //     );
  //   }
  //   const testRender = create(<TestNavBarBlog />);
  //   const testInstance = testRender.root;
  //   expect(testInstance.findByProps({ className: 'titleApp' }).children).toEqual(['Blog']);
  // });
});
