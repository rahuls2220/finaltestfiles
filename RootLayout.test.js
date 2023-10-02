import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RootLayout from './RootLayout';

test('renders RootLayout with MainNavigation', () => {
  const { getByText } = render(
    <Router>
      <RootLayout />
    </Router>
  );

});

test('renders Outlet', () => {
  const { container } = render(
    <Router>
      <RootLayout />
    </Router>
  );

  const outletElement = container.querySelector('div > div');
  expect(outletElement).toBeInTheDocument();
});
