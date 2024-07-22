import { render, screen } from '@testing-library/react';
import {
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
} from 'react-aria-components';
import { describe, expect, it } from 'vitest';

function Dropdown<T extends object>({
  items,
  children,
  label,
}: {
  items?: Iterable<T>;
  label?: string;
  children?: React.ReactNode | ((item: T) => React.ReactNode);
}) {
  return (
    <Select>
      <Label>{label}</Label>
      <Popover>
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </Select>
  );
}

describe('Dropdown', () => {
  it('should render a select element', () => {
    const { container } = render(<Dropdown />);

    const hiddenSelect = container.querySelector('select');
    expect(hiddenSelect).toBeInTheDocument();
  });

  it('should render a select with options', () => {
    const { container } = render(
      <Dropdown>
        <ListBoxItem>Chocolate</ListBoxItem>
      </Dropdown>
    );

    const hiddenOptions = container.querySelectorAll('option');
    expect(hiddenOptions).toHaveLength(2);
  });

  it('should show a dropdown with a label', () => {
    render(
      <Dropdown label="Test Label">
        <ListBoxItem>Chocolate</ListBoxItem>
      </Dropdown>
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });
});
