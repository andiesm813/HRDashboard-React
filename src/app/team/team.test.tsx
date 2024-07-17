import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Team from './team';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders Team component', () => {
  const wrapper = render(<Team />);
  expect(wrapper).toBeTruthy();
});