/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Blog } from './Blog';

describe(('Test component Blog'), () => {
  test('render component Blog', () => {
    let blog;
    act(() => {
      blog = create(
        <Router>
          <Blog />
        </Router>,
      );
    });
    expect(blog.toJSON()).toMatchSnapshot();
  });
});
