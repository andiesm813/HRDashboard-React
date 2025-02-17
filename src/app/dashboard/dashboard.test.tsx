import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Dashboard from './dashboard';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders Dashboard component', () => {
  const wrapper = render(<Dashboard />);
  expect(wrapper).toBeTruthy();
});