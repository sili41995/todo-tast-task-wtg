import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  padding: ${({ theme }) => theme.spacing()};
  background-color: ${({ theme }) => theme.colors.btnBackgroundColor};
  border-radius: ${({ theme }) =>
    `${theme.borderRadius.secondaryBorderRadius}px`};
  border-color: transparent;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => `${theme.fontSize.primaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  &:is(:hover, :focus) {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }
`;
