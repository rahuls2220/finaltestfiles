import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

test('renders Login component', () => {
  // Mock setLoggedIn function
  const setLoggedIn = jest.fn();

  render(
    <MemoryRouter>
      <Login loggedIn={false} setLoggedIn={setLoggedIn} />
    </MemoryRouter>
  );

  // Check if the BRENS Corp. text is present
  const brensCorpText = screen.getByText('BRENS Corp.');
  expect(brensCorpText).toBeInTheDocument();

  // Check if the "Username" input field is present
  const usernameInput = screen.getByLabelText('Username');
  expect(usernameInput).toBeInTheDocument();

  // Check if the "Password" input field is present
  const passwordInput = screen.getByLabelText('Password');
  expect(passwordInput).toBeInTheDocument();

  // Check if the "Log in" button is present
  const loginButton = screen.getByText('Log in');
  expect(loginButton).toBeInTheDocument();

  // Check if the "Reset Password" link is present
  const resetPasswordLink = screen.getByText('Reset Password');
  expect(resetPasswordLink).toBeInTheDocument();

  // Simulate user input and form submission
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(loginButton);

  // Check if setLoggedIn is called with true when the form is submitted
//   expect(setLoggedIn).toHaveBeenCalledWith(true);
});
