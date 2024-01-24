import { FC } from 'react';
import { IProps } from './Input.types';
import { InputTypes } from 'constants/index';
import { Label, StyledInput } from './Input.styled';

const Input: FC<IProps> = ({
  settings,
  type,
  altElem,
  checked,
  ...otherProps
}) => {
  const input = (
    <StyledInput type={type} checked={checked} {...settings} {...otherProps} />
  );
  const isCheckbox = type === InputTypes.checkbox;

  return isCheckbox ? (
    <Label checked={checked}>
      {altElem}
      {input}
    </Label>
  ) : (
    input
  );
};

export default Input;
