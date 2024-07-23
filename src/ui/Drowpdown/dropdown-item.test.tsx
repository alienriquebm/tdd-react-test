import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import DropdownItem from './dropdown-item';
import { ListBox } from 'react-aria-components';

describe('DropdownItem', () => {
  afterEach(cleanup);

  it('should render a listbox item', () => {
    render(
      <ListBox aria-label="Test">
        <DropdownItem>Option test</DropdownItem>
      </ListBox>
    );
    expect(screen.getByRole('option')).toBeInTheDocument();
  });
});
