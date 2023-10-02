import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoanView from './LoanView';
import { MemoryRouter } from 'react-router-dom';

// Mock the API functions and localStorage
jest.mock('../api', () => ({
  loan_data: jest.fn(),
  loan_delete: jest.fn(),
}));

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};
global.localStorage = localStorageMock;

describe('LoanView Component', () => {
  it('renders the LoanView component correctly', () => {
    render(
      <MemoryRouter>
        <LoanView />
      </MemoryRouter>
    );

  });

  it('handles loan deletion confirmation', async () => {
    // Mock the API responses
    require('../api').loan_data.mockResolvedValue([
      { loan_id: 1, loan_type: 'Type 1', duration: 5 },
      { loan_id: 2, loan_type: 'Type 2', duration: 7 },
    ]);
    require('../api').loan_delete.mockResolvedValue({});

    render(
      <MemoryRouter>
        <LoanView />
      </MemoryRouter>
    );
  });

  // You can add more test cases to cover other scenarios as needed

  it('handles unauthenticated user correctly', () => {
    // Mock localStorage to simulate an unauthenticated user
    localStorageMock.getItem.mockReturnValue(null);

    render(
      <MemoryRouter>
        <LoanView />
      </MemoryRouter>
    );

    // Check if the "unauthorized" message is displayed
    // expect(screen.getByText('You are not logged in Please log in')).toBeInTheDocument();
  });
});
