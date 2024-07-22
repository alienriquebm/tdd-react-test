import { Button as RAButton } from 'react-aria-components';
import { ButtonVariant, IButton } from './button-interfaces';
import clsx from 'clsx';

const Button = ({
  children,
  onClick,
  className,
  disabled,
  variant = ButtonVariant.PRIMARY,
}: IButton) => {
  const buttonVariant =
    variant === ButtonVariant.SECONDARY
      ? ButtonVariant.SECONDARY
      : ButtonVariant.PRIMARY;

  const buttonClasses = clsx(
    variant === ButtonVariant.PRIMARY &&
      !disabled &&
      'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
    variant === ButtonVariant.SECONDARY &&
      !disabled &&
      'py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ',
    variant === ButtonVariant.PRIMARY &&
      disabled &&
      'cursor-not-allowed text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 opacity-50',
    variant === ButtonVariant.SECONDARY &&
      disabled &&
      'cursor-not-allowed py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 opacity-50',
    className
  );
  return (
    <RAButton
      isDisabled={disabled}
      onPress={onClick}
      className={buttonClasses}
      data-variant={buttonVariant}
    >
      {children}
    </RAButton>
  );
};

export default Button;
