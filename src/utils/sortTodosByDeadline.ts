import { ITodo } from 'types/types';

const sortTodosByDeadline = (todos: ITodo[] | null): ITodo[] | null => {
  if (!todos) {
    return todos;
  }

  return [...todos].sort((prevTodo, nextTodo) =>
    prevTodo.deadline
      .toLocaleString()
      .localeCompare(nextTodo.deadline.toLocaleString())
  );
};

export default sortTodosByDeadline;
