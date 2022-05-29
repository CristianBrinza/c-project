import { CSSProperties, Component, MouseEvent, ReactNode } from 'react';

export interface ButtonProps {
  /**
   * Current button state. Values: 'idle' | 'loading' | 'success' | 'error'
   * Default: 'idle'.
   */
  buttonState?: string;

  /**
   * Callback function when clicking button.
   * Default: () => {}
   */
  onClick?: (event: MouseEvent) => void;

  /**
   * Button color. values: 'primary' | 'secondary' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'teal' | 'violet' | 'blue'
   * Default: 'primary'
   */
  color?: string;

  /**
   * Button text when idle.
   * Default: 'Click Me'
   */
  idleText?: string | ReactNode;

  /**
   * Button text when loading.
   * Default: 'Loading'
   */
  loadingText?: string | ReactNode;

  /**
   * Button text when loading successful.
   * Default: 'Success'
   */
  successText?: string | ReactNode;

  /**
   * Button text when loading failed.
   * Default: 'Error'
   */
  errorText?: string | ReactNode;

  /**
   * Button type attribute. Values: 'button' | 'submit' | 'reset'
   * Default: 'button'
   */
  type?: string;

  /**
   * Button classnames.
   * Default: ''
   */
  className?: string;

  /**
   * Custom style.
   * Default: {}
   */
  style?: CSSProperties;

  /**
   * Button size. Values: 'tiny' | 'small' | 'normal' | 'large'
   *
   * Default: 'normal'
   */
  size?: string;

  /**
   * Disable button.
   *
   * Default: false
   */
  disabled?: boolean;

  submit?: boolean;
}

declare class Button extends Component<ButtonProps, any> {}

export default Button;
