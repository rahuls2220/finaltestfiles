import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import AddEmployee from './AddEmployee';

test('renders AddEmployee component', () => {
  const { getByText } = render(
    <MemoryRouter>
      <AddEmployee />
    </MemoryRouter>
  );
  
  // Check if a text element inside the component is present
//   const textElement = getByText(/Employee Details/i);
//   expect(textElement).toBeInTheDocument();
});
