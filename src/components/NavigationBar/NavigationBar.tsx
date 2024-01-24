import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IProps } from './NavigationBar.types';
import LinkWithQuery from 'components/LinkWithQuery';
import { PagePaths } from 'constants/index';
import { List, ListItem, NavContainer } from './NavigationBar.styled';

const NavigationBar: FC<IProps> = ({ navLinks }) => {
  const addTodoPath = `${PagePaths.todosPath}/${PagePaths.newTodoPath}`;

  return (
    <NavContainer>
      <List>
        {navLinks.map(({ href, title }) => (
          <ListItem key={href}>
            <NavLink to={href}>{title}</NavLink>
          </ListItem>
        ))}
        <ListItem>
          <LinkWithQuery to={addTodoPath}>New Todo</LinkWithQuery>
        </ListItem>
      </List>
    </NavContainer>
  );
};

export default NavigationBar;
