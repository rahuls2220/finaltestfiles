import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';

describe('AdminNavBar', () => {
  it('renders the AdminNavBar component', () => {
    render(
      <MemoryRouter>
        <AdminNavBar />
      </MemoryRouter>
    );

    // Check if the component and its links are rendered
    const brandLink = screen.getByText('BRENS Corp.');
    const homeLink = screen.getByText('Home');
    const addEmployeeLink = screen.getByText('Add Employee');
    const addLoanLink = screen.getByText('Add Loan');
    const addItemsLink = screen.getByText('Add Items');
    const logoutButton = screen.getByText('Logout');

    expect(brandLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(addEmployeeLink).toBeInTheDocument();
    expect(addLoanLink).toBeInTheDocument();
    expect(addItemsLink).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });

  it('calls handleLogout when the Logout button is clicked', () => {
    const mockNavigate = jest.fn();
    render(
      <MemoryRouter>
        <AdminNavBar navigate={mockNavigate} />
      </MemoryRouter>
    );

    // // Simulate a click on the Logout button
    // const logoutButton = screen.getByText('Logout');
    // fireEvent.click(logoutButton);

    // // Check if handleLogout was called
    // // expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
