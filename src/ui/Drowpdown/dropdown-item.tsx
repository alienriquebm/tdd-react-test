import clsx from 'clsx';
import { ListBoxItem, ListBoxItemProps } from 'react-aria-components';

const DropdownItem = (props: ListBoxItemProps) => {
  return (
    <ListBoxItem
      {...props}
      className={({ isFocused, isSelected }) =>
        clsx(
          'px-4 py-2 min-h-12 flex items-center [&[data-focus-visible]]::border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200 ease-in-out rounded-sm',
          {
            'bg-blue-100': isFocused,
            'text-slate-800 bg-blue-100 font-semibold': isSelected,
          }
        )
      }
    />
  );
};

export default DropdownItem;
