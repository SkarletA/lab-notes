/* eslint-disable no-shadow */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Register } from './Register';

describe(('Test component Register'), () => {
  test('render component Register', () => {
    let register;
    act(() => {
      register = create(
        <Router>
          <Register />
        </Router>,
      );
    });
    expect(register.toJSON()).toMatchSnapshot();
  });
});
