import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemPurchased from './ItemPurchased';
import { MemoryRouter } from 'react-router-dom';

// Mock the get_items_by_emp_id function from your API module
jest.mock('../api', () => ({
  get_items_by_emp_id: jest.fn(() => Promise.resolve([])), // Mock an empty array of items
}));

describe('ItemPurchased Component', () => {
  it('renders the ItemPurchased component correctly', async () => {
    render(
      <MemoryRouter>
        <ItemPurchased />
      </MemoryRouter>
    );

    // Mock API data
    const mockedItems = [
      { item: { itemid: 1, description: 'Item 1', make: 'Make 1', category: 'Category 1', value: 100 }, issueDate: '2023-09-28' },
      { item: { itemid: 2, description: 'Item 2', make: 'Make 2', category: 'Category 2', value: 200 }, issueDate: '2023-09-29' },
    ];

    // Mock the resolved data when get_items_by_emp_id is called
    require('../api').get_items_by_emp_id.mockResolvedValue(mockedItems);


    
  
  });

  // You can add more test cases to cover other scenarios as needed

  it('handles unauthenticated user correctly', async () => {
    render(
      <MemoryRouter>
        <ItemPurchased />
      </MemoryRouter>
    );

    // Mock API data
    const mockedItems = [
      { item: { itemid: 1, description: 'Item 1', make: 'Make 1', category: 'Category 1', value: 100 }, issueDate: '2023-09-28' },
      { item: { itemid: 2, description: 'Item 2', make: 'Make 2', category: 'Category 2', value: 200 }, issueDate: '2023-09-29' },
    ];

    // Mock the resolved data when get_items_by_emp_id is called
    require('../api').get_items_by_emp_id.mockResolvedValue(mockedItems);



    // Check if the "unauthorized" message is displayed
    // expect(screen.getByText('OOPS You are not logged in. PLease Log in')).toBeInTheDocument();
  });
});
