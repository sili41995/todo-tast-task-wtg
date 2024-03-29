import styled from '@emotion/styled';

export const NavContainer = styled.nav``;

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const ListItem = styled.li`
  &:last-of-type {
    margin-left: auto;
  }
  & a {
    display: block;
    min-width: 100px;
    padding: ${({ theme }) => theme.spacing(3)};
    border-radius: ${({ theme }) => theme.borderRadius.primaryBorderRadius}px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    font-family: Inter;
    font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
    font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
    text-align: center;
    transition: color ${({ theme }) => theme.transitionDurationAndFunc},
      background-color ${({ theme }) => theme.transitionDurationAndFunc};
    &:is(:hover, :focus),
    &.active {
      color: ${({ theme }) => theme.colors.otherColor};
      background-color: ${({ theme }) => theme.colors.whiteColor};
    }
  }
`;
