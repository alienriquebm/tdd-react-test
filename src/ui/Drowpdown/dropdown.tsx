import {
  Button,
  Label,
  ListBox,
  Popover,
  Select,
  SelectValue,
  Text,
} from 'react-aria-components';
import { ISelect } from './dropdown-interfaces';
import { MdKeyboardArrowDown } from 'react-icons/md';
import clsx from 'clsx';

export default function Dropdown<T extends object>({
  items,
  children,
  label,
  description,
  disabled,
  name,
}: ISelect<T>) {
  const buttonClasses = clsx(
    'flex w-full py-1 px-4 justify-between items-center rounded-md text-base text-slate-500 border border-slate-500 bg-white font-regular placeholder-gray-400 bg-white [&[data-focus-visible]]:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200 ease-in-out',
    disabled && '!bg-slate-100 !text-slate-400'
  );

  return (
    <Select isDisabled={disabled} name={name}>
      {({ isOpen }) => (
        <>
          <Label>{label}</Label>
          <Button className={buttonClasses}>
            <SelectValue className="whitespace-nowrap overflow-hidden text-ellipsis [&[data-placeholder]]:text-slate-400" />
            <MdKeyboardArrowDown
              size={24}
              aria-hidden
              className={clsx(
                'transition-transform duration-200 ease-in-out flex-shrink-0',
                {
                  'rotate-180': isOpen,
                }
              )}
            />
          </Button>
          {description && <Text slot="description">{description}</Text>}
          <Popover offset={2}>
            <ListBox
              items={items}
              className="w-[--trigger-width] bg-white py-2 rounded-md shadow-2xl animate-in fade-in duration-200 [&[data-focus-visible]]:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {children}
            </ListBox>
          </Popover>
        </>
      )}
    </Select>
  );
}
