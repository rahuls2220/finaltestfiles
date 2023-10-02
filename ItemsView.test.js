import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ItemsView from './ItemsView';
import { MemoryRouter } from 'react-router-dom';

// Mock the API functions and localStorage
jest.mock('../api', () => ({
  item_delete: jest.fn(),
  getItems: jest.fn(),
}));

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};
global.localStorage = localStorageMock;

describe('ItemView Component', () => {
  it('renders the ItemView component correctly', async () => {
    // Mock the API response for getItems
    require('../api').getItems.mockResolvedValue([
      { itemid: 1, category: 'Category 1', description: 'Description 1', make: 'Make 1', value: 100 },
      { itemid: 2, category: 'Category 2', description: 'Description 2', make: 'Make 2', value: 200 },
    ]);

    render(
      <MemoryRouter>
        <ItemsView />
      </MemoryRouter>
    );
  });

  it('handles unauthenticated user correctly', () => {
    // Mock localStorage to simulate an unauthenticated user
    localStorageMock.getItem.mockReturnValue(null);

    render(
      <MemoryRouter>
        <ItemsView />
      </MemoryRouter>
    );

    // Check if the "unauthorized" message is displayed
    // expect(screen.getByText('You are not logged in Please log in')).toBeInTheDocument();
  });
});
