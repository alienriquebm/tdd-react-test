import { Button as RAButton } from 'react-aria-components';
import { IButton } from './button-interfaces';
import clsx from 'clsx';

const Button = ({ label, onClick, className }: IButton) => {
  const buttonClasses = clsx(
    'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
    className
  );
  return (
    <RAButton onPress={onClick} className={buttonClasses}>
      {label}
    </RAButton>
  );
};

export default Button;
