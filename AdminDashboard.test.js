import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';

// Mock localStorage
global.localStorage = {
  getItem: jest.fn(),
};

test('renders AdminDashboard when logged in', () => {
  // Mock localStorage to simulate being logged in


  render(
    <MemoryRouter>
      <AdminDashboard />
    </MemoryRouter>
  );

});

test('renders UnauthorisezAcces when not logged in', () => {
  // Mock localStorage to simulate being logged out
//   localStorage.getItem.mockReturnValueOnce(null);

  render(
    <MemoryRouter>
      <AdminDashboard />
    </MemoryRouter>
  );

  // Check if the component renders UnauthorisezAcces when not logged in
  // const errorMessageElement = screen.getByText(/You are not logged in/i);
  // expect(errorMessageElement).toBeInTheDocument();
});
