import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Unauthorized from './Unauthorized';

test('renders Unauthorized component', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Unauthorized navig="/dashboard" role="Admin" />
    </MemoryRouter>
  );

  expect(getByText('Oops!')).toBeInTheDocument();
  expect(getByText('Page not found.')).toBeInTheDocument();
  expect(getByText('You are unauthorized to access this page!')).toBeInTheDocument();
  expect(getByText('Go to Admin dashboard')).toBeInTheDocument();
});
