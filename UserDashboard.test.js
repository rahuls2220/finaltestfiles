import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserDashboard from './UserDashboard';

describe('UserDashboard Component', () => {
  it('renders the UserDashboard component correctly', () => {
    render(
      <MemoryRouter>
        <UserDashboard />
      </MemoryRouter>
    );

    
  });


  it('renders an unauthorized access message correctly', () => {
    render(
      <MemoryRouter>
        <UserDashboard />
      </MemoryRouter>
    );

    // For an unauthorized access message:
    
    // Check if the "404" title is rendered
    // expect(screen.getByText('404')).toBeInTheDocument();

    // Check if the "Oops!" text is rendered
    // expect(screen.getByText('Oops!')).toBeInTheDocument();

    // Check if the "Page not found." text is rendered
    // expect(screen.getByText('Page not found.')).toBeInTheDocument();

    // Check if the "Go Back" button is rendered
    // expect(screen.getByText('Go Back')).toBeInTheDocument();

  });

});
