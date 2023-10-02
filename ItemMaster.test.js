import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ItemMaster from './ItemMaster';
import { MemoryRouter } from 'react-router-dom';


// Mock the react-router-dom library
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

// Mock the API function
jest.mock('../api', () => ({
  addItem: jest.fn(),
}));

describe('ItemMaster Component', () => {
  it('renders the ItemMaster component correctly', () => {
    render(
        <MemoryRouter>
          <ItemMaster />
        </MemoryRouter>
      );    
  });

   });

