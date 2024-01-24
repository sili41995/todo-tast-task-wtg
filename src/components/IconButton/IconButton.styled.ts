import styled from '@emotion/styled';
import { IStyledProps } from './IconButton.types';
import { setButtonColor, setIconFill } from 'utils';

export const Button = styled.button<IStyledProps>`
  position: ${({ position }) => position};
  z-index: 10;
  top: 0px;
  right: 0px;
  display: flex;
  gap: ${({ theme }) => `${theme.primaryGap}px`};
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 36px;
  padding: ${({ theme }) => theme.spacing()};
  background-color: ${({ btnType }) => setButtonColor(btnType)};
  border-color: transparent;
  border-radius: ${({ theme }) =>
    `${theme.borderRadius.secondaryBorderRadius}px`};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => `${theme.fontSize.primaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  &:is(:hover, :focus) {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }
  & svg {
    color: ${({ btnType }) => setIconFill(btnType)};
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }
`;
