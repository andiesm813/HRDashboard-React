import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Events from './events';
import 'element-internals-polyfill';

test('renders Events component', () => {
  const wrapper = render(<Events />);
  expect(wrapper).toBeTruthy();
});