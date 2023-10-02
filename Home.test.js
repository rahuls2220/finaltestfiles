import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('renders Home component', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  // Check if the navbar brand is present
  const navbarBrand = screen.getByText('BRENS Corp.');
  expect(navbarBrand).toBeInTheDocument();

  // Check if the Home link is present
  const homeLink = screen.getByText('Home');
  expect(homeLink).toBeInTheDocument();

  // Check if the Login link is present
  const loginLink = screen.getByText('Login');
  expect(loginLink).toBeInTheDocument();

  // Check if the card title is present
  const cardTitle = screen.getByText('Welcome to BRENS - Simplify Your Loan Management');
  expect(cardTitle).toBeInTheDocument();

  // Check if the card text is present
  const cardText1 = screen.getByText("Are you tired of the complexities and hassles associated with loan management? Look no further! BRENS is here to revolutionize the way you handle loans.");
  expect(cardText1).toBeInTheDocument();
  
  const cardText2 = screen.getByText("BRENS is a user-friendly, secure, and efficient loan management system designed to streamline the entire loan process. Whether you're a financial institution, a business, or an individual, we have tailored solutions to meet your needs.");
  expect(cardText2).toBeInTheDocument();

  // Check if the "Get started" button is present and has the correct link
  const getStartedButton = screen.getByRole('link', { name: 'Get started' });
  expect(getStartedButton).toBeInTheDocument();
  expect(getStartedButton).toHaveAttribute('href', '/user');
});
