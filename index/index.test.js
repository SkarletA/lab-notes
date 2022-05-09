/* eslint-disable global-require */

describe('Application root', () => {
  test('renders without crashing', () => {
    const mockCreateRootFn = jest.fn().mockImplementation(() => ({ render: jest.fn() }));
    jest.mock('react-dom/client', () => ({ createRoot: mockCreateRootFn }));
    const container = document.createElement('div');
    container.id = 'root';
    document.body.appendChild(container);
    require('../index.js');
    expect(mockCreateRootFn).toHaveBeenCalledWith(container);
  });
});
