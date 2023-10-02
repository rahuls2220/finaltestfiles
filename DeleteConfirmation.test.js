import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeleteConfirmation from './DeleteConfirmation';

describe('DeleteConfirmation', () => {
  const mockHideModal = jest.fn();
  const mockConfirmModal = jest.fn();
  const message = 'Are you sure you want to delete this item?';

  beforeEach(() => {
    render(
      <DeleteConfirmation
        showModal={true}
        hideModal={mockHideModal}
        confirmModal={mockConfirmModal}
        message={message}
      />
    );
  });

  it('renders the modal with the correct title and message', () => {
    const modalTitle = screen.getByText('Delete Confirmation');
    const modalMessage = screen.getByText(message);

    expect(modalTitle).toBeInTheDocument();
    expect(modalMessage).toBeInTheDocument();
  });

  it('calls hideModal when Cancel button is clicked', () => {
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);

    expect(mockHideModal).toHaveBeenCalledTimes(1);
  });

  it('calls confirmModal when Delete button is clicked', () => {
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    expect(mockConfirmModal).toHaveBeenCalledTimes(1);
  });
});
