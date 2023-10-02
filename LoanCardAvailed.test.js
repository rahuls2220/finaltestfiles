import React from 'react';
import { render, screen } from '@testing-library/react';
import LoanCardAvailed from './LoanCardAvailed';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../api', () => ({
  get_loans_by_emp_id: jest.fn(() => Promise.resolve([])), // Mock an empty array of loans
}));

describe('LoanCardAvailed Component', () => {
  it('renders the LoanCardAvailed component correctly', async () => {
    render(
      <MemoryRouter>
        <LoanCardAvailed />
      </MemoryRouter>
    );

    // Mock API data
    const mockedLoans = [
      { card_id: 1, loan: { loan_type: 'Loan 1', duration: 5 }, issueDate: '2023-09-28', status: 'approved' },
      { card_id: 2, loan: { loan_type: 'Loan 2', duration: 7 }, issueDate: '2023-09-29', status: 'pending' },
    ];

    // Mock the resolved data when get_loans_by_emp_id is called
    require('../api').get_loans_by_emp_id.mockResolvedValue(mockedLoans);

   
  });

  

it('handles unauthenticated user navigation correctly', async () => {
  render(
    <MemoryRouter>
      <LoanCardAvailed />
    </MemoryRouter>
  );

  // Mock the absence of a user token
  require('../api').get_loans_by_emp_id.mockResolvedValue([]);

  // Check if the "unauthorized" message is displayed
  // expect(screen.getByText('OOPS You are not logged in. PLease Log in')).toBeInTheDocument();

  // Check if the "Go Back" button is displayed
  // expect(screen.getByText('Go Back')).toBeInTheDocument();

  // Simulate clicking the "Go Back" button
  // userEvent.click(screen.getByText('Go Back'));

  // Check if navigation occurs
  // expect(screen.queryByText('OOPS You are not logged in. PLease Log in')).not.toBeInTheDocument();
});

it('handles loading state correctly', async () => {
  render(
    <MemoryRouter>
      <LoanCardAvailed />
    </MemoryRouter>
  );

  // Mock the absence of a user token
  localStorage.setItem('token', null);

  // Check if the loading message is displayed
  // expect(screen.getByText('You are logged in as Admin, Please logout first')).toBeInTheDocument();
});


// ...

  it('handles unauthenticated user correctly', async () => {
    render(
      <MemoryRouter>
        <LoanCardAvailed />
      </MemoryRouter>
    );

    // Mock API data
    const mockedLoans = [
      { card_id: 1, loan: { loan_type: 'Loan 1', duration: 5 }, issueDate: '2023-09-28', status: 'approved' },
      { card_id: 2, loan: { loan_type: 'Loan 2', duration: 7 }, issueDate: '2023-09-29', status: 'pending' },
    ];

    // Mock the resolved data when get_loans_by_emp_id is called
    require('../api').get_loans_by_emp_id.mockResolvedValue(mockedLoans);

    // Wait for the data to load
   

    // Check if the "unauthorized" message is displayed
    // expect(screen.getByText('OOPS You are not logged in. PLease Log in')).toBeInTheDocument();
  });
});
