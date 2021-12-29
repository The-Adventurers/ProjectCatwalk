import React from 'react';
import { screen, render } from '@testing-library/react';
import { test } from '@jest/globals';
import App from '../client/src/components/App';

test('EXPECTED: App should render \'Price\'', () => {
  render(<App />);
  screen.getByText('Price');
});

// test('ImageGallery to render correct quantity of miages in MiniGallery', () => {
//   render(<App />);

// })
