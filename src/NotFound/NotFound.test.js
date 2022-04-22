/* eslint-disable no-shadow */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { NotFound } from './NotFound';

describe(('Test component NotFound'), () => {
  test('render component NotFound', () => {
    let notFound;
    act(() => {
      notFound = create(
        <Router>
          <NotFound />
        </Router>,
      );
    });
    expect(notFound.toJSON()).toMatchSnapshot();
  });
});
