import { BtnType, IconBtnType, Positions } from 'constants/index';
import { MouseEvent, ReactNode } from 'react';

export interface IProps {
  icon: ReactNode;
  onBtnClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: BtnType;
  btnType: IconBtnType;
  position?: Positions;
  disabled?: boolean;
  title?: string;
}

export interface IStyledProps {
  position: Positions;
  btnType: IconBtnType;
}
