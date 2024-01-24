import { FC } from 'react';
import { IProps } from './TodosList.types';
import TodosListItem from 'components/TodosListItem';
import { List } from './TodosList.styled';

const TodosList: FC<IProps> = ({ todos }) => (
  <List>
    {todos.map((todo) => (
      <TodosListItem todo={todo} key={todo.id} />
    ))}
  </List>
);

export default TodosList;
