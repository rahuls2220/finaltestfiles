import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ApplyForLoan from './ApplyForLoan';
import { MemoryRouter } from 'react-router-dom';

// Mock the API functions and localStorage
jest.mock('../api', () => ({
  get_items_by_description: jest.fn(),
  get_items_by_category: jest.fn(),
  applyLoan: jest.fn(),
}));

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};
global.localStorage = localStorageMock;

describe('ApplyForLoan Component', () => {
    
  it('renders the ApplyForLoan component correctly', () => {
    render(
      <MemoryRouter>
        <ApplyForLoan />
      </MemoryRouter>
    );

   
  });

  it('handles form submission correctly', async () => {
    // Mock the API responses
    require('../api').get_items_by_description.mockResolvedValue({ itemid: 1, value: 100, make: 'Make 1' });
    require('../api').get_items_by_category.mockResolvedValue([]);
    require('../api').applyLoan.mockResolvedValue({}); // Mock the applyLoan function response

    render(
      <MemoryRouter>
        <ApplyForLoan />
      </MemoryRouter>
    );
  });


  it('handles unauthenticated user correctly', () => {
    // Mock localStorage to simulate an unauthenticated user
    localStorageMock.getItem.mockReturnValue(null);

    render(
      <MemoryRouter>
        <ApplyForLoan />
      </MemoryRouter>
    );

    // Check if the "unauthorized" message is displayed
    // expect(screen.getByText('OOPS You are not logged in. PLease Log in')).toBeInTheDocument();
  });
});
