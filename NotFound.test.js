import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../components/NotFound';

test('renders the NotFound component', () => {
  // Render the NotFound component within a MemoryRouter to provide the <Link> component with routing context.
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

  // Check if the text "404" is present in the rendered component.
  const headerElement = screen.getByText('404');
  expect(headerElement).toBeInTheDocument();

  // Check if the "Go Home" link is present.
  const linkElement = screen.getByRole('link', { name: /Go Home/i });
  expect(linkElement).toBeInTheDocument();
});
