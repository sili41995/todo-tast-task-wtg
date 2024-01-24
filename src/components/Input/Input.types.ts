import { ChangeEvent, ReactElement } from 'react';
import { InputTypes } from 'constants/index';

export interface IProps {
  settings: object;
  type: InputTypes;
  placeholder?: string;
  autoFocus?: boolean;
  altElem?: ReactElement;
  defaultValue?: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IStyledProps {
  checked?: boolean;
}
