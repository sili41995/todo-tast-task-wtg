import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { PagePaths } from 'constants/index';
import { IProps } from './GoBackLink.types';
import { StyledLink } from './GoBackLink.styled';

const GoBackLink: FC<IProps> = ({ title = 'Go Back' }) => {
  const { search } = useLocation();
  const goBackPath = `${PagePaths.todosPath}${search}`;

  return <StyledLink to={goBackPath}>{title}</StyledLink>;
};

export default GoBackLink;
