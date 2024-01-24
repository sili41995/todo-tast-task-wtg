import styled from '@emotion/styled';
import { IStyledProps } from './Input.types';

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.secondaryBorderRadius}px;
  padding: ${({ theme }) => theme.spacing(2)};
  font-family: Inter;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  font-size: ${({ theme }) => theme.fontSize.secondaryFontSize}px;
  letter-spacing: 0.04em;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primaryColor};
  }
  &:focus + svg {
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const Label = styled.label<IStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  & input {
    position: fixed;
    transform: scale(0);
  }
  &:has([type='checkbox']) svg {
    width: 40px;
    height: 100%;
    padding: ${({ theme }) => theme.spacing(2)};
    border: 1px solid;
    border-color: ${({ theme, checked }) =>
      checked ? 'transparent' : theme.colors.borderColor};
    border-radius: ${({ theme }) => theme.borderRadius.secondaryBorderRadius}px;
    background-color: ${({ theme, checked }) =>
      checked ? theme.colors.otherColor : 'transparent'};
    color: ${({ theme, checked }) =>
      checked ? theme.colors.whiteColor : 'transparent'};
    cursor: pointer;
    transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc},
      background-color ${({ theme }) => theme.transitionDurationAndFunc},
      color ${({ theme }) => theme.transitionDurationAndFunc},
      border-color ${({ theme }) => theme.transitionDurationAndFunc};
    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
    }
  }
`;
