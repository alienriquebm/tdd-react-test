export interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: string;
  disabled?: boolean;
}

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
