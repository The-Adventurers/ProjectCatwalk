import React from 'react';
import { screen, render } from '@testing-library/react';
import { test } from '@jest/globals';
import App from '../client/src/components/App';

test('EXPECTED: App should render \'Category\'', () => {
  render(<App />);
  screen.getByText('Category');
});
