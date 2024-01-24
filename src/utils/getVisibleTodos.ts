import { IGetVisibleTodosProps, ITodo } from 'types/types';

const getVisibleTodos = ({
  todos,
  quantity,
  currentPage,
}: IGetVisibleTodosProps): ITodo[] | null => {
  if (!todos) {
    return todos;
  }

  const skip = (currentPage - 1) * quantity;

  return todos.slice(skip, quantity * currentPage);
};

export default getVisibleTodos;
