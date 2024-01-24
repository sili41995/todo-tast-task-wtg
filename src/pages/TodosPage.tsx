import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { selectTodos } from '../redux/todos/selectors';
import { useAppSelector } from 'hooks/redux';
import Loader from 'components/Loader';
import TodosContainer from 'components/TodosContainer';

const TodosPage = () => {
  const todos = useAppSelector(selectTodos);

  return (
    todos && (
      <>
        <TodosContainer quantity={6} />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    )
  );
};

export default TodosPage;
