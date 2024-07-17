import { expect, test, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './app';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders App component', () => {
  const wrapper = render(<App />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});