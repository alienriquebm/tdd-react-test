import { SelectProps } from 'react-aria-components';

export interface ISelect<T extends object>
  extends Omit<SelectProps<T>, 'children'> {
  label?: string;
  items?: Iterable<T>;
  description?: string;
  children?: React.ReactNode | ((item: T) => React.ReactNode);
  disabled?: boolean;
  name?: string;
}
