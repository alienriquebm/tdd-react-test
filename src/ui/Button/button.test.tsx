import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import Button from './button';

describe('Button', () => {
  afterEach(cleanup);

  it('should render a button', () => {
    render(<Button label="Click me" />);
    expect(screen.getByRole('button')).toBeTruthy();
  });
  /* 
  it('should render a button with a label', () => {
    render(<Button />);
    expect(
      screen.getByRole('button', {
        name: 'Click me',
      })
    );
  });
 */
  it('should accept a label as prop', () => {
    render(<Button label="This is a custom label" />);
    expect(
      screen.getByRole('button', {
        name: 'This is a custom label',
      })
    );
  });

  it('it should execute a function when clicked', () => {
    const mockFn = vi.fn();
    render(<Button label="Click me" onClick={mockFn} />);
    screen.getByRole('button').click();
    expect(mockFn).toBeCalled();
  });

  it('should accept custom classes', () => {
    render(<Button label="Click me" className="custom-class" />);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('should render secondary type button', () => {
    render(<Button label="Click me" type="secondary" />);
    expect(screen.getByRole('button')).toHaveClass('secondary');
  });
});
