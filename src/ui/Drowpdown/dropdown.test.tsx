import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import Dropdown from './dropdown';
import DropdownItem from './dropdown-item';

describe('Dropdown', () => {
  afterEach(cleanup);
  it('should render a select element', () => {
    const { container } = render(<Dropdown />);

    const hiddenSelect = container.querySelector('select');
    expect(hiddenSelect).toBeInTheDocument();
  });

  it('should render a select with options', () => {
    const { container } = render(
      <Dropdown>
        <DropdownItem>Chocolate</DropdownItem>
      </Dropdown>
    );

    const hiddenOptions = container.querySelectorAll('option');
    expect(hiddenOptions).toHaveLength(2);
  });

  it('should show a dropdown with a label', () => {
    render(
      <Dropdown label="Test Label">
        <DropdownItem>Chocolate</DropdownItem>
      </Dropdown>
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('should render a description', () => {
    render(
      <Dropdown label="Test Label" description="This is a description">
        <DropdownItem>Chocolate</DropdownItem>
      </Dropdown>
    );
    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  it('should render the selected value with a button', () => {
    render(
      <Dropdown label="Test Label">
        <DropdownItem>Chocolate</DropdownItem>
      </Dropdown>
    );
    expect(screen.getByRole('button')).toBeInTheDocument;
  });

  it('should disable the select element', () => {
    const { container } = render(
      <Dropdown label="Test Label" disabled>
        <DropdownItem>Chocolate</DropdownItem>
      </Dropdown>
    );
    const hiddenSelect = container.querySelector('select');
    expect(hiddenSelect).toBeDisabled();
  });

  it('should render a select with name', () => {
    const { container } = render(
      <Dropdown label="Test Label" name="test">
        <DropdownItem>Chocolate</DropdownItem>
      </Dropdown>
    );

    const hiddenSelect = container.querySelector('select');
    expect(hiddenSelect).toHaveAttribute('name', 'test');
  });

  it('should render dynamic values', () => {
    const options = [
      { id: 1, name: 'Aerospace' },
      { id: 2, name: 'Mechanical' },
      { id: 3, name: 'Civil' },
      { id: 4, name: 'Biomedical' },
      { id: 5, name: 'Nuclear' },
      { id: 6, name: 'Industrial' },
      { id: 7, name: 'Chemical' },
      { id: 8, name: 'Agricultural' },
      { id: 9, name: 'Electrical' },
    ];

    const { container } = render(
      <Dropdown label="Pick an engineering major" items={options}>
        {(item) => <DropdownItem>{item.name}</DropdownItem>}
      </Dropdown>
    );

    const hiddenOptions = container.querySelectorAll('option');
    expect(hiddenOptions).toHaveLength(options.length + 1);
  });
});
