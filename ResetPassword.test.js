import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ResetPassword from './ResetPassword';

test('renders ResetPassword component', () => {
  // Mock setLoggedIn function
  const setLoggedIn = jest.fn();

  render(
    <MemoryRouter>
      <ResetPassword loggedIn={false} setLoggedIn={setLoggedIn} />
    </MemoryRouter>
  );

  // Check if the BRENS Corp. text is present
  const brensCorpText = screen.getByText('BRENS Corp.');
  expect(brensCorpText).toBeInTheDocument();

  // Check if the "Username" input field is present
  const usernameInput = screen.getByLabelText('Username');
  expect(usernameInput).toBeInTheDocument();

  // Check if the "Existing Password" input field is present
  const existingPasswordInput = screen.getByLabelText('Existing Password');
  expect(existingPasswordInput).toBeInTheDocument();

  // Check if the "New Password" input field is present
  const newPasswordInput = screen.getByLabelText('New Password');
  expect(newPasswordInput).toBeInTheDocument();

  // Check if the "Confirm New Password" input field is present
  const confirmNewPasswordInput = screen.getByLabelText('Confirm New Password');
  expect(confirmNewPasswordInput).toBeInTheDocument();

  // Check if the "Change Password" button is present
  const changePasswordButton = screen.getByText('Change Password');
  expect(changePasswordButton).toBeInTheDocument();

  // Simulate user input and form submission
  fireEvent.change(usernameInput, { target: { value: 'testuser@BRENS' } });
  fireEvent.change(existingPasswordInput, { target: { value: 'password123' } });
  fireEvent.change(newPasswordInput, { target: { value: 'newpassword' } });
  fireEvent.change(confirmNewPasswordInput, { target: { value: 'newpassword' } });
  fireEvent.click(changePasswordButton);

  // Check if setLoggedIn is called with true when the form is submitted
  // expect(setLoggedIn).toHaveBeenCalledWith(true);
});
