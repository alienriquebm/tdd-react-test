import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import Button from './button';

describe('Button', () => {
  afterEach(cleanup);

  it('should render a button', () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole('button')).toBeTruthy();
  });

  it('should accept a label as children', () => {
    render(<Button>Label</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Label');
  });

  it('it should execute a function when clicked', () => {
    const mockFn = vi.fn();
    render(<Button onClick={mockFn}>Label</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockFn).toBeCalled();
  });

  it('should accept custom classes', () => {
    render(<Button className="custom-class">Label</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('should accepts a prop variant with value "primary"', () => {
    render(<Button variant="primary">Primary Button</Button>);
    expect(screen.getByRole('button')).toHaveAttribute(
      'data-variant',
      'primary'
    );
  });

  it('should accept a prop variant with value "secondary"', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    expect(screen.getByRole('button')).toHaveAttribute(
      'data-variant',
      'secondary'
    );
  });

  it('should render a button with a default variant if no variant is provided', () => {
    render(<Button>Default Button</Button>);
    expect(screen.getByRole('button')).toHaveAttribute(
      'data-variant',
      'primary'
    );
  });

  it('should render a button with a primary variant if an invalid variant is provided', () => {
    render(<Button variant="invalid">Invalid Button</Button>);
    expect(screen.getByRole('button')).toHaveAttribute(
      'data-variant',
      'primary'
    );
  });

  it('should render a disabled button', () => {
    render(<Button disabled>Disabled Button</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
