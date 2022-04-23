/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
// import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ModalDelete } from './ModalDelete';

describe(('Test component ModalDelete'), () => {
  test('render component ModalDelete', () => {
    let modalDelete;
    act(() => {
      modalDelete = create(<ModalDelete />);
    });
    expect(modalDelete.toJSON()).toMatchSnapshot();
  });

  // test('create a element dom', () => {
  //   const testRender = create(<ModalDelete />);
  //   const testInstance = testRender.root;
  //   console.log(testInstance);
  //   // expect(testInstance).toBe('function');
  //   // expect(testInstance.findByProps({ className: 'titleDelete' }).children).toEqual(['Are you sure you want to delete this note? ']);
  // });

  // const mockOnClick = jest.fn();

  // test('value when clicked', () => {
  //   const componentModal = create(
  //     <ModalDelete closeModalDelete={mockOnClick} />,
  //   );
  //   const button = componentModal.root.props;
  //   console.log(button);
  //   fireEvent.click(button);
  //   expect(mockOnClick).toHaveBeenCalledTimes(1);
  // });
});
