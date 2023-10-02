import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import LoanCardManager from './LoanCardManager';

test('renders LoanCardManager component without errors', () => {
  render(
    <MemoryRouter> {/* Wrap your component with MemoryRouter */}
      <LoanCardManager />
    </MemoryRouter>
  );
});
