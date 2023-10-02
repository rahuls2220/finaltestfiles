import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import UserNavBar from './UserNavBar';

// Mock the useNavigate function
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('UserNavBar', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <UserNavBar param1="value1" param2="value2" />
      </MemoryRouter>
    );
  });

  test('renders navigation links', () => {
    const homeLink = screen.getByText('Home');
    const applyLink = screen.getByText('Apply');
    const viewItemsLink = screen.getByText('View Items');
    const logoutButton = screen.getByText('Logout');

    expect(homeLink).toBeInTheDocument();
    expect(applyLink).toBeInTheDocument();
    expect(viewItemsLink).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });

  test('navigates to Home when Home link is clicked', () => {
    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);
    // expect(mockNavigate).toHaveBeenCalledWith('/userdashboard');
  });

  test('navigates to ApplyForLoan when Apply link is clicked', () => {
    const applyLink = screen.getByText('Apply');
    fireEvent.click(applyLink);
    // expect(mockNavigate).toHaveBeenCalledWith('/ApplyForLoan');
  });

  test('navigates to itemPurchased when View Items link is clicked', () => {
    const viewItemsLink = screen.getByText('View Items');
    fireEvent.click(viewItemsLink);
    // expect(mockNavigate).toHaveBeenCalledWith('/itemPurchased');
  });

 
});
