import { FC } from 'react';
import { BtnType, Positions } from 'constants/index';
import { IProps } from './IconButton.types';
import { Button } from './IconButton.styled';

const IconButton: FC<IProps> = ({
  icon,
  onBtnClick,
  title,
  type = BtnType.button,
  position = Positions.static,
  disabled = false,
  btnType,
  ...otherProps
}) => (
  <Button
    type={type}
    onClick={onBtnClick}
    position={position}
    disabled={disabled}
    btnType={btnType}
    {...otherProps}
  >
    {title ? (
      <>
        {icon}
        {title}
      </>
    ) : (
      icon
    )}
  </Button>
);

export default IconButton;
