import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import EditEmployeeData from './EditEmployeeData';

// Mock useLocation to provide a custom location.state
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: { Id: 'your_custom_id_value' },
  }),
}));

test('renders EditEmployeeData when logged in', () => {
  render(
    <MemoryRouter>
      <EditEmployeeData isLoggedIn={true} />
    </MemoryRouter>
  );

  // const employeeDetailsText = screen.getByText('Employee Details');
  // const submitButtonText = screen.getByText('Submit form');

  // expect(employeeDetailsText).toBeInTheDocument();
  // expect(submitButtonText).toBeInTheDocument();
});
