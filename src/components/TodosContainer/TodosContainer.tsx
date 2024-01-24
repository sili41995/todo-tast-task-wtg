import { FC } from 'react';
import { selectTodos } from '../../redux/todos/selectors';
import { useAppSelector } from 'hooks/redux';
import { Messages, SearchParamsKeys } from 'constants/index';
import { useSetSearchParams } from 'hooks';
import { getVisibleTodos, sortTodosByDeadline } from 'utils';
import DefaultMessage from 'components/DefaultMessage';
import PaginationBar from 'components/PaginationBar';
import TodosList from 'components/TodosList';
import { IProps } from './TodosContainer.types';
import { ITodo } from 'types/types';
import { Container } from './TodosContainer.styled';

const TodosContainer: FC<IProps> = ({ quantity }) => {
  const todos = useAppSelector(selectTodos);
  const { searchParams } = useSetSearchParams();
  const currentPage = Number(searchParams.get(SearchParamsKeys.page) ?? 1);
  const isValidPage = currentPage > 0;

  const sortedTodoByDeadline = sortTodosByDeadline(todos);

  const visibleTodos = getVisibleTodos({
    todos: sortedTodoByDeadline,
    quantity,
    currentPage,
  });

  const isShouldRenderList =
    todos && isValidPage && Boolean(visibleTodos?.length);

  return (
    <Container>
      {isShouldRenderList ? (
        <>
          <PaginationBar
            quantity={quantity}
            step={2}
            itemsQuantity={todos.length}
          />
          <TodosList todos={visibleTodos as ITodo[]} />
        </>
      ) : (
        <DefaultMessage message={Messages.emptyList} />
      )}
    </Container>
  );
};

export default TodosContainer;
