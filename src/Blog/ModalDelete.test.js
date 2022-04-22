/* eslint-disable no-shadow */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { ModalDelete } from './ModalDelete';

describe(('Test component ModalDelete'), () => {
  test('render component ModalDelete', () => {
    let modalDelete;
    act(() => {
      modalDelete = create(
        <Router>
          <ModalDelete />
        </Router>,
      );
    });
    expect(modalDelete.toJSON()).toMatchSnapshot();
  });
});
