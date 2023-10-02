import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import MainNavigation from './MainNavigation';

describe('MainNavigation Component', () => {
  it('renders the MainNavigation component without errors', () => {
    const { getByText } = render(
      <MemoryRouter>
        <MainNavigation />
      </MemoryRouter>
    );

    const linkToEmployeeList = getByText('List Employees');
    const linkToAddEmployee = getByText('Add Employee');

  });
});
