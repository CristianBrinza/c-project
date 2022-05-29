export type modelType = 'regular' | 'bold';

export interface IconProps {
  onClick?: () => void;
  type?: string;
  component?: any;
  model?: modelType;
}
