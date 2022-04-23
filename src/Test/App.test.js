import { create, act } from 'react-test-renderer';
import App from '../App/App';

describe('Test component App', () => {
  test('renders react component', async () => {
    let root;
    act(() => {
      root = create(<App />);
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
