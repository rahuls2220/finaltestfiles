import React from 'react';
import { render } from '@testing-library/react';
import CustomButton from './CustomButton';

describe('CustomButton', () => {
  it('renders a button element with the provided className', () => {
    const className = 'custom-button';
    const { container } = render(
      <CustomButton className={className}>Click Me</CustomButton>
    );
    const button = container.querySelector('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(className);
    expect(button).toHaveTextContent('Click Me');
  });

  it('renders an anchor element when "as" prop is set to "a"', () => {
    const { container } = render(
      <CustomButton as="a" href="#example">
        Link
      </CustomButton>
    );
    const link = container.querySelector('a');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#example');
    expect(link).toHaveTextContent('Link');
  });

  it('renders a button element by default', () => {
    const { container } = render(<CustomButton>Default Button</CustomButton>);
    const button = container.querySelector('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Default Button');
  });
});
