import React from 'react';
import { render } from '@testing-library/react';
import App from 'App';

test('existence test', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Hello World!/i);
  expect(titleElement).toBeInTheDocument();
});
