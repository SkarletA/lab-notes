/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
// import { render } from '@testing-library/react';
// import { act } from "react-dom/test-utils";
// eslint-disable-next-line import/no-unresolved
import { create, act } from 'react-test-renderer';
import App from '../App/App';

describe('Test component App', () => {
  test('renders react component', async () => {
    let root;
    act(() => {
      root = create(<App value={1} />);
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
